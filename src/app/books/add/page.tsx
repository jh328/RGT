'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {addBook} from "@/app/lib/boot";

export default function AddBookPage() {
    const router = useRouter();
    const [newBook, setNewBook] = useState({ title: '', author: '', description: '', price: 0, stock: 0 , });

    const handleSubmit = () => {
        addBook({ ...newBook, id: Date.now() });
        router.push('/books');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">📖 새 책 추가</h1>
            <input type="text" placeholder="제목" onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
            <input type="text" placeholder="저자" onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} />
            <textarea placeholder="설명" onChange={(e) => setNewBook({ ...newBook, description: e.target.value })} />
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-4">책 추가</button>
        </div>
    );
}
