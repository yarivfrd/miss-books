
import { bookService } from "../services/book.service.js"
import { makeId, defaultPageAanimations, currencySymbolMap } from "../services/util.service.js";
import { AddReview } from "../cmps/AddReview.jsx";
import { Reviews } from "../cmps/Reviews.jsx";

const { useState, useEffect } = React;
const { useParams, useNavigate } = ReactRouterDOM;

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

    function onRemoveBook(bookId) {
    bookService.remove(bookId)
        .then(() => {
            navigate(`/book`);
        })
        .catch(err => {
            console.log('Problems removing book:', err)
        })
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

    function handleReviewSubmission(e, { fullName, rating }, clearForm) {
        e.preventDefault();
        bookService.addReview(book.id, {
            fullName,
            rating: +rating,
            readAt: Date.now()
        }).then(updatedBook => {
            setBook(updatedBook);
            clearForm();
        });
    }

    function handleReviewDelete(reviewId) {
        console.log('handleReviewDelete');
        bookService.deleteReview(book.id, reviewId)
            .then(updatedBook => {
            setBook(updatedBook);
        });
    }

    if (!book) return <div>Loading...</div>
    return (
        <section className={`book-details ${[...defaultPageAanimations].join(" ")}`}>
            <nav className="navigation">
                <button onClick={() => navigate('/book')}><i className="fa fa-chevron-left back-to-books-btn" aria-hidden="true"></i>Books</button>
                <div className="nav-btns">
                    <button onClick={() => navigate(`/book/${book.prevBookId}`)}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                    <button onClick={() => navigate(`/book/${book.nextBookId}`)}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                </div>
            </nav>
            <div className="main-details">
                <div className="cover-container">
                    <img className="cover-image" src={book.thumbnail} alt="Book cover" />
                    <button className="remove-book-btn cta danger" onClick={() => onRemoveBook(book.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    <button className="edit-book-btn cta" onClick={() => navigate(`/book/edit/${book.id}`)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                </div>
                <div className="info">
                    <h2 className="book-title">{book.title}</h2>
                    <p>{book.subtitle}</p>
                    <p>By {book.authors.map(author => <span key={makeId()}>{author}</span>)}</p>
                    <p>Released {book.publishedDate} | {book.pageCount} Pages | Language: {book.language.toUpperCase()}</p>
                    <p>Level: {getReadingLevelMsg()}</p>
                    <p>{book.description}</p>
                    <p className="categories">Categories: {book.categories.map(cat => <span key={makeId()} style={{ border: 'solid 1px', paddingInline: '5px', marginInlineEnd: '5px' }}>{cat}</span>)}</p>
                    <p>{getAgeLevel()}</p>
                    <p>
                        <span style={{ color: getPriceColor() }}>{currencySymbolMap[book.listPrice.currencyCode]}{book.listPrice.amount}</span>
                        &nbsp;<span>{book.listPrice.isOnSale ? '- ON SALE' : ''}</span>
                    </p>
                </div>
            </div>
            <hr />
            <Reviews
                reviewItems={book.reviews}
                bookId={book.id}
                handleReviewDelete={handleReviewDelete}
            />
            <AddReview
                bookId={book.id}
                handleReviewSubmission={handleReviewSubmission}
            />
        </section>
    )
}