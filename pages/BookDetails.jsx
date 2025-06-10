import { bookService } from "../services/book.service.js"
import { makeId } from "../services/util.service.js";

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

const currencySymbolMap = {
    'EUR': '€',
    'USD': '$',
    'ILS': '₪'
};

export function BookDetails() {
    const
        [book, setBook] = useState(null),
        params = useParams(),
        navigate = useNavigate();

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        setBook(null);
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onBack() {
        navigate('/book')
    }

    function getReadingLevelMsg() {
        if (book.pageCount > 500) return 'Serious Reading';
        if (book.pageCount > 200) return 'Descent Reading';
        if (book.pageCount < 100) return 'Light Reading';
    }

    function getAgeLevel() {
        const currYear = new Date().getFullYear();
        if (currYear === book.publishedDate) return 'New';
        if (currYear - book.publishedDate > 10) return 'Vintage';
    }

    function getPriceColor() {
        if (book.listPrice.amount > 150) return 'red';
        if (book.listPrice.amount < 20) return 'green';
    }

    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <div className="navigation">
                <button onClick={onBack}>All Books</button>
                <section>
                    <Link to={`/book/${book.prevBookId}`}><button>Prev Book</button></Link>
                    <Link to={`/book/${book.nextBookId}`}><button>Next Book</button></Link>
                </section>
            </div>
            <div className="main-details">
                <img src={book.thumbnail} alt="cover-image" />
                <div className="info">
                    <h2>{book.title}</h2>
                    <p>By: {book.authors.map(author => <span key={makeId()}>{author}</span>)}</p>
                    <p>Released {book.publishedDate} | {book.pageCount} Pages | Language: {book.language.toUpperCase()}</p>
                    <p>Level: {getReadingLevelMsg()}</p>
                    <p>{book.subtitle}</p>
                    <p>{book.description}</p>
                    <p className="categories">Categories: {book.categories.map(cat => <span  key={makeId()} style={{border: 'solid 1px', paddingInline: '5px', marginInlineEnd: '5px'}}>{cat}</span>)}</p>
                    <p>{getAgeLevel()}</p>
                    <p>
                        <span style={{color: getPriceColor()}}>{currencySymbolMap[book.listPrice.currencyCode]}{book.listPrice.amount}</span>
                        &nbsp;<span>{book.listPrice.isOnSale ? '- ON SALE' : ''}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}