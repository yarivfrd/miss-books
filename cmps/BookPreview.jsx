
export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <div className={`image-container ${book.listPrice.isOnSale ? 'on-sale' : ''}`}>
                <img src={book.thumbnail} alt="book-cover" />
                </div>
            <h2>{book.title}</h2>
        </article>
    )
}