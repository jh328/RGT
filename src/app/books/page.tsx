'use client';
import { useEffect, useState } from 'react';
import {getBooks} from "@/app/lib/boot";
import BookList from "@/app/component/BookList";

export default function BooksPage() {
    const [books, setBooks] = useState(getBooks());
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setBooks(getBooks());
    }, []);

    // 검색 기능
    const filteredBooks = books.filter(
        book => book.title.includes(searchQuery) || book.author.includes(searchQuery)
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">📚 책 목록</h1>
            <input
                type="text"
                placeholder="책 제목 또는 저자 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <BookList books={filteredBooks} />
        </div>
    );
}
