import {create} from "zustand/react";

export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    stock: number;
    image: string;
}

interface BookStore {
    books: Book[];
    setBooks: (books: Book[]) => void;
}

export const useBooks = create<BookStore>((set) => ({
    books:[],
    setBooks:(books)=>set({books})
}))