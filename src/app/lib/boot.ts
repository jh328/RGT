export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    stock: number;
    image: string;
}

export const books: Book[] = [
    {
        id: 1,
        title: "모던 리액트 Depp Dive",
        author: "김용찬",
        description: "프론트엔드 개발은 자바스크립트와 리액트부터 시작한다는 말이 있을 정도로 최근 몇 년간 프론트엔드 생태계에서 리액트의 비중은 날이 갈수록 커지고 있습니다. 이 책에서는 0.x 버전의 리액트부터 최신 버전인 18버전에 이르기까지, 리액트를 둘러싼 다양한 내용을 다루고 있습니다. 리액트는 하나의 온전한 웹 프레임워크를 지향하지 않아 UI 외에 상태 관리나 서버 사이트 렌더링 등 웹 개발의 많은 영여에서 선택의 여지를 남겨뒀으며, 이 때문에 리액트 개발자라면 알아둬야 할 내용이 많습니다. 함수형 컴포넌트와 훅의 동작 원리, 메모리제이션의 필요성과 실제로 메모리에이션이 되고 있는지 확인 하는 방법, 리액트의 상태 관리와 다양한 상태 관리 라이브러리의 동작 방식, 실무에서 널리 쓰이고 있는 Next.js 그리고 리액트 애플리케이션의 성능을 분석하는 방법까지, 리액트에 관심 있는 개발자라면 이 책을 통해 리액트 앱 개발의 시작부터 끝까지 경험해 보면서 웹 서비스 개발의 즐거움을 만끽하시길 바랍니다",
        price: 43200,
        stock: 200,
        image: "/images/reactDeepDive.jpg"
    },
    {
        id: 2,
        title: "모던 자바스크립트 Deep Dive",
        author: "김용찬",
        description: "웹페이지의 단순한 보조 기능을 처리하기 위한 제한적인 용도로 태어난 자바스크립트는 과도하다고 느껴질 만큼 친절한 프로그래밍 언어입니다. 이러한 자바스크립트의 특징은 편리한 경우도 있지만 내부 동작을 이해하기 어렵게 만들기도 합니다.\n" +
            "\n" +
            "하지만 자바스크립트는 더 이상 제한적인 용도의 프로그래밍 언어가 아닙니다. 오랜 변화를 거쳐 이제 자바스크립트는 프런트엔드와 백엔드 영역의 프로그래밍 언어로 사용할 수 있는 명실상부한 범용 애플리케이션 개발 언어로 성장했습니다. 따라서 자바스크립트를 학습하는 방식도 이에 걸맞게 변화해야 하며, 이 책은 자바스크립트의 기본 개념과 동작 원리를 깊이 있게 학습하고자 하는 독자를 위해 기획되었습니다.\n" +
            "\n" +
            "《모던 자바스크립트 Deep Dive》에서는 자바스크립트를 둘러싼 기본 개념을 정확하고 구체적으로 설명하고, 자바스크립트 코드의 동작 원리를 집요하게 파헤칩니다. 따라서 여러분이 작성한 코드가 컴퓨터 내부에서 어떻게 동작할 것인지 예측하고, 명확히 설명할 수 있도록 돕습니다. 또한 최신 자바스크립트 명세를 반영해 안정적이고 효율적인 코드를 작성할 수 있는 기본기를 다지고, 실전에서 쓰이는 모던 자바스크립트 프레임워크나 도구를 완벽하게 이해하고 활용할 수 있게 도와줍니다.",
        price: 40500,
        stock: 200,
        image: "/images/javaScriptDeepDive.jpg"
    },
    {
        id: 3,
        title: "패턴으로 익히고 설계로 완성하는 리액트",
        author: "준타오",
        description: "리액트를 활용한 대규모 애플리케이션 개발은 비동기 처리, 상태 관리, 성능 최적화 등 다양한 도전을 동반합니다. 이 책은 리액트 개발에서 자주 발생하는 안티패턴을 정의하고, 이를 검증된 설계 원칙으로 해결하는 방법을 제시합니다. 실용적인 예제와 단계별 접근으로 코드 구조를 개선하고 TDD, 설계 원칙을 통해 신뢰할 수 있는 애플리케이션을 만드는 법을 배웁니다. 또한, 날씨 애플리케이션 프로젝트를 통해 배운 내용을 실전에 직접 적용해 볼 수 있습니다. 이 책은 리액트 개발자에게 견고하고 확장 가능한 애플리케이션을 만드는 확실한 길잡이가 될 것입니다.",
        price: 27000,
        stock: 10,
        image: "/images/pattonReact.jpg"
    },
    {
        id: 4,
        title: "리액트 인터뷰 가이드",
        author: "수디르조나",
        description: "《리액트 인터뷰 가이드》는 리액트 생태계와 최신 리액트 개발 동향에 대해 종합적으로 다룬다. 이 책을 통해 리액트 개발에 필수적인 기술과 팁을 통해 앞으로 겪을 다양한 상황에 신속하게 대응할 수 있는 능력을 키울 수 있다.\n" +
            "\n" +
            "또한 리액트 개발자 면접을 준비하는 프런트엔드 개발자 꿈나무들뿐만 아니라 이미 경험 많은 개발자들도 리액트 지식을 확장할 수 있도록 리액트 면접에서 자주 등장하는 질문과 테스팅, Next.js 앱 구축과 같은 중요 기술들을 함께 다룬다.\n" +
            "\n" +
            "이 책을 통해 리액트 직무 면접에 대한 자신감을 쌓고, 리액트 개발자로서 한 단계 더 나아갈 수 있을 것이다.",
        price: 25200,
        stock: 105,
        image: "/images/reactInterviewGide.jpg"
    }
];

export function getBooks(): Book[] {
    if (typeof window !== "undefined") {
        const storedBooks = localStorage.getItem("books");
        return storedBooks ? JSON.parse(storedBooks) : books;
    }
    return books
}

export function addBook(book: Book) {
    const updatedBook = [...getBooks(), book];
    localStorage.setItem("books", JSON.stringify(updatedBook));
}

export function deleteBook(id: number) {
    const updatedBooks = getBooks().filter(book => book.id !== id);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
}
