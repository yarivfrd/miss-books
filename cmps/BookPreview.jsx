
export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <h2>{book.title}</h2>
            <div className={`image-container ${book.listPrice.isOnSale ? 'on-sale' : ''}`}>
                <img src={book.thumbnail} alt="book-cover" />
            </div>
        </article>
    )
}