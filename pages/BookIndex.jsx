import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"

const { Link } = ReactRouterDOM

const { useEffect, useState } = React


export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
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
                setBooks(books => books.filter(car => car.id !== bookId))
            })
            .catch(err => {
                console.log('Problems removing book:', err)
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <Link to='/book/edit'>Add New</Link>
            <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <BookList
                books={books}
                onRemoveBook={onRemoveBook}
            />
        </section>
    )

}