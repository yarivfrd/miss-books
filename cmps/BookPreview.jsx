
const { useNavigate } = ReactRouterDOM;
import { currencySymbolMap } from "../services/util.service.js";


export function BookPreview({ book }) {

    const navigate = useNavigate();

    return (
        <article className="book-preview" onClick={() => navigate(`/book/${book.id}`)}>
            <div className="item-bg"></div>
            <div className={`image-container ${book.listPrice.isOnSale ? 'on-sale' : ''}`}>
                <img src={book.thumbnail} alt="book-cover" />
            </div>
            <div className="book-info">
                <h2>{book.title}</h2>
                <div className="author">By {book.length > 1 ? `${book.authors[0]} and others` : book.authors[0]}</div>
                <div className="description">{book.description}</div>
                <div className="rating"></div>
                <div className="price">{currencySymbolMap[book.listPrice.currencyCode]} {book.listPrice.amount}</div>
            </div>
        </article>
    )
}