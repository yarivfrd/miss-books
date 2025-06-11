
export function Review({
    id,
    fullName,
    rating,
    readAt,
    handleReviewDelete
}) {
    return (
        <div className="Review">
            <span>{fullName} </span>
            <span>{rating} ★ </span>
            <span>{new Date(readAt).toLocaleDateString()} | {new Date(readAt).toLocaleTimeString()}</span>
            <button onClick={() => handleReviewDelete(id)}>Delete</button>
        </div>
    )
}
