import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Book} from "@/app/lib/book";

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={300}
                className="rounded-lg mx-auto"
            />
            <h2 className="text-xl font-bold mt-2">{book.title}</h2>
            <p className="text-gray-600">저자: {book.author}</p>
            <p className="text-sm">{book.description}</p>
            <p className="text-md font-semibold mt-2"> 가격: {book.price}원</p>
            <Link href={`/books/${book.id}`} className="text-blue-500 mt-2 inline-block">
                상세 보기 →
            </Link>
        </div>
    );
};

export default BookCard;
