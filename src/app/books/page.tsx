'use client';
import {useEffect, useState} from 'react';
import BookList from '@/app/component/BookList';
import Link from 'next/link';
import {useBooks} from "@/app/store/useBookStore";

export default function BooksPage() {
    const {books, getBooks} = useBooks();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;

    useEffect(() => {
        getBooks();
    }, []);

    const filteredBooks = books.filter(
        book => book.title.includes(searchQuery) || book.author.includes(searchQuery)
    );

    const indexLastPage = currentPage * booksPerPage;
    const indexFirstPage = indexLastPage - booksPerPage;
    const currentBooks = filteredBooks.slice(indexFirstPage, indexLastPage);

    const totalPage = Math.ceil(filteredBooks.length / booksPerPage);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4"> 책 목록</h1>

            <Link href="/books/add">
                <button>
                    <span className="hidden">추가</span>
                    <span className="ico-plus btn-plus-ico"></span>
                </button>
            </Link>

            <input
                type="text"
                placeholder="책 제목 또는 저자 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 w-full mb-4"
            />

            <BookList books={currentBooks}/>

            <div className="page-nation flex justify-center mt-4">
                {Array.from({length: totalPage}, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
