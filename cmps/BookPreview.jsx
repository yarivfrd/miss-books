
export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <h2>{book.title}</h2>
            <img src={book.thumb} alt="book-cover" />
        </article>
    )
}