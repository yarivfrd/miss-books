import { Review } from "../cmps/Review.jsx";
import { makeId } from "../services/util.service.js";

export function Reviews( {
    reviewItems,
    handleReviewDelete
}) {

    if (!reviewItems) return null;
    return (
        <div className="Reviews">
            <h2>Reviews</h2>
            {reviewItems.map(({
                id,
                fullName,
                rating,
                readAt
            }) => (
                <Review
                    key={makeId()}
                    id={id}
                    fullName={fullName}
                    rating={rating}
                    readAt={readAt}
                    handleReviewDelete={handleReviewDelete}
                />
            ))}
        </div>
    )
}
