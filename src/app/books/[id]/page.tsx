import Image from 'next/image';
import Link from 'next/link';
import {Book, getBooks} from "@/app/lib/boot";

export default function BookDetailPage({ params }: { params: { id: string } }) {
    const books = getBooks();
    const book: Book | undefined = books.find((b) => b.id.toString() === params.id);


    if (!book) {
        return <p className="text-center text-red-500">책을 찾을 수 없습니다.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <Link href="/books" className="text-blue-500">← 책 목록으로</Link>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                {/* ✅ 이미지 표시 */}
                <Image
                    src={book.image}
                    alt={book.title}
                    width={300}
                    height={400}
                    className="rounded-lg shadow-md"
                />

                <div>
                    <h1 className="text-3xl font-bold">{book.title}</h1>
                    <p className="text-lg text-gray-600">저자: {book.author}</p>
                    <p className="mt-4">{book.description}</p>
                    <p className="mt-4 text-xl font-semibold">💰 가격: {book.price}원</p>
                    <p className="text-gray-500">📦 재고: {book.stock}개</p>
                </div>
            </div>
        </div>
    );
}
