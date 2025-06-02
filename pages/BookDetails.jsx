import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onBack() {
        navigate('/book')
    }

    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <img src={book.thumb} alt="cover-image" />
            <button onClick={onBack}>Back</button>
            <section>
                <Link to={`/book/${book.prevBookId}`}><button>Prev Book</button></Link>
                <Link to={`/book/${book.nextBookId}`}><button>Next Book</button></Link>
            </section>
        </section>
    )
}