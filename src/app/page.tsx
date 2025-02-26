import BooksPage from "@/app/books/page";

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">📖 책 관리 시스템</h1>
            <BooksPage/>
        </div>

    );
}
