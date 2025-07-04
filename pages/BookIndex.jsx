import { BookAside } from "../cmps/BookAside.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { defaultPageAanimations, getTruthyValues } from "../services/util.service.js";

const { useNavigate, useSearchParams } = ReactRouterDOM;

const { useEffect, useState } = React

export function BookIndex() {
    const
        [books, setBooks] = useState([]),
        [searchParams, setSearchParams] = useSearchParams(),
        [filterBy, setFilterBy] = useState(bookService.getFilterFromSrcParams(searchParams)),
        navigate = useNavigate();

    useEffect(() => {
        loadBooks();
        setSearchParams(getTruthyValues(filterBy));
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(setBooks)
            .catch(err => {
                console.error('Problems getting books:', err)
            })
    }

    function handleSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function handleBooksReset() {
        bookService.resetBooksDb();
        navigate(0);
    }

    if (!books) return <div>Loading...</div>
    return (
        <div className={`book-index ${[...defaultPageAanimations].join(" ")}`}>
            <section className="hero">
                <h1 className="hero-title">Explore Every Page</h1>
                <p className="hero-subtitle">Step into a world where every book is a journey waiting to unfold. At Miss Books, we believe that reading is more than a pastime — it’s a powerful way to discover new ideas, explore distant lands, and connect with voices from across time and cultures.</p>
                <video playsInline autoPlay={true} loop={true} className="hero-image" src="https://github.com/yarivfrd/miss-books/raw/refs/heads/main/assets/img/man-reading.mp4" alt="hero-image" />
            </section>

            <BookAside
                onSetFilter={handleSetFilter}
                onBookReset={handleBooksReset}
                filterBy={filterBy}
            />
            <BookList books={books} />
        </div>
    )

}