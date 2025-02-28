import {create} from "zustand/react";
import {Book} from "@/app/lib/book";


interface BookStore {
    books: Book[];
    getBooks: () => void;
    addBook: (book: Book) => void;
    deleteBook: (id: number) => void;
}

export const useBooks = create<BookStore>((set) => ({
    books:[],

    getBooks:()=> {
        if (typeof window !== "undefined") {
            const storedBooks = localStorage.getItem("books");
            const books = storedBooks ? JSON.parse(storedBooks) : [];
            set({books});
        }
    },

    addBook: (book) => {
        set((state) => {
            const updatedBooks = [...state.books, book];
            localStorage.setItem("books", JSON.stringify(updatedBooks));
            return { books: updatedBooks };
        });
    },

    deleteBook: (id) => {
        set((state) => {
            const updatedBooks = state.books.filter(book => book.id !== id);
            localStorage.setItem("books", JSON.stringify(updatedBooks));
            return { books: updatedBooks };
        });
    }
}))