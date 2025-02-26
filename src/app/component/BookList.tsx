'use client'
import {Book} from "@/app/lib/boot";
import {useState} from "react"

export default function BookList() {
    const [books, setBooks] = useState<Book[]>([]);

    return (
        <div>
            <h3>오늘의 선택</h3>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> - {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}