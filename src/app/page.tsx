import BooksPage from "@/app/books/page";

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-h1">📖 책 관리 시스템</h1>
            <BooksPage/>
        </div>

    );
}
