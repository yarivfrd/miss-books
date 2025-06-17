import { BookAside } from "../cmps/BookAside.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"
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
        loadBooks()
        setSearchParams(getTruthyValues(filterBy));
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(setBooks)
            .catch(err => {
                console.log('Problems getting books:', err)
            })
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks(books => books.filter(book => book.id !== bookId))
                const removedBookTitle = books.find(book => book.id === bookId).title;
                showSuccessMsg(`"${removedBookTitle}" removed successfully!`);
            })
            .catch(err => {
                console.log('Problems removing book:', err)
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
        <div className={`BookIndex ${[...defaultPageAanimations].join(" ")}`}>
            <BookAside
                onSetFilter={handleSetFilter}
                onBookReset={handleBooksReset}
                filterBy={filterBy}
            />
            <BookList
                books={books}
                onRemoveBook={onRemoveBook}
            />
        </div>
    )

}