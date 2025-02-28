'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useBooks } from '@/app/store/useBookStore';
import { Book } from '@/app/lib/book';

export default function BookDetailPage() {
    const router = useRouter();
    const params = useParams();
    const { books, getBooks, deleteBook } = useBooks();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        getBooks();
    }, []);

    useEffect(() => {
        if (params?.id && books.length > 0) {
            const foundBook = books.find((b) => b.id.toString() === params.id);
            setBook(foundBook ?? null);
        }
    }, [params.id, books]);

    if (!book) {
        return <p className="text-center text-red-500">책을 찾을 수 없습니다.</p>;
    }

    const handleDelete = () => {
        deleteBook(book.id);
        router.push('/books');
        router.refresh();
    };

    return (
        <div className="container mx-auto p-4">
            <Link href="/books" className="text-blue-500">← 책 목록으로</Link>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                <Image src={book.image} alt={book.title} width={300} height={400} className="rounded-lg shadow-md"/>
                <div>
                    <h1 className="text-3xl font-bold">{book.title}</h1>
                    <p className="text-lg text-gray-600">저자: {book.author}</p>
                    <button onClick={handleDelete} className="mt-4 bg-red-600 text-white px-4 py-2">
                        🗑️ 책 삭제
                    </button>
                </div>
            </div>
        </div>
    );
}
