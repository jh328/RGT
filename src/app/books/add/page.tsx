'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Book } from '@/app/lib/book';
import {useBooks} from "@/app/store/useBookStore";

export default function AddBookPage() {
    const router = useRouter();
    const { addBook } = useBooks();
    const [newBook, setNewBook] = useState<Omit<Book, "id">>({
        title: '',
        author: '',
        description: '',
        price: 0,
        image: '/images/default.jpg',
    });

    const handleSubmit = () => {
        if (!newBook.title || !newBook.author || !newBook.price) {
            alert('모든 필수 정보를 입력해주세요!');
            return;
        }

        addBook({ ...newBook, id: Date.now() });

        router.push('/books');
        router.refresh();
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">📖 새 책 추가</h1>
            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="제목"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    className="border p-2"
                />
                <input
                    type="text"
                    placeholder="저자"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    className="border p-2"
                />
                <textarea
                    placeholder="설명"
                    value={newBook.description}
                    onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                    className="border p-2"
                />
                <input
                    type="number"
                    placeholder="가격"
                    value={newBook.price}
                    onChange={(e) => setNewBook({ ...newBook, price: Number(e.target.value) })}
                    className="border p-2"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white p-2 mt-4"
                >
                     책 추가하기
                </button>
            </div>
        </div>
    );
}
