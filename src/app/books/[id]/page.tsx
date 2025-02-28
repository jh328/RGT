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
        <div className="book-detail-container">
            <Link href="/books" className="text-blue-500">← 책 목록으로</Link>
            <div className="book-detail-text">
                <Image src={book.image} alt={book.title} width={300} height={400} className="rounded-lg shadow-md"/>
                <div>
                    <h1 className="book-detail-h1">{book.title}</h1>
                    <p className="book-detail-au">저자: {book.author}</p>
                    <button onClick={handleDelete} className="book-delete-btn">
                        책 삭제
                    </button>
                </div>
            </div>
        </div>
    );
}
