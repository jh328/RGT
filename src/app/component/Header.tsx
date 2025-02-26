import Link from "next/link";

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {

    return (
        <div className="header">
            <Link href="https://rgt.kr/">
                <h1>{title}</h1>
            </Link>
            <div className="search-container">
                <input type="text" className="header-search"/>
                <button className="search-button">검색</button>
            </div>
        </div>

    )
}