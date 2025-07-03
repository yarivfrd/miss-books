import { Review } from "../cmps/Review.jsx";
import { makeId } from "../services/util.service.js";

export function Reviews( {
    reviewItems,
    handleReviewDelete
}) {
    return (
        <div className="reviews">
            <h2 className="title">Reviews</h2>
            {reviewItems && reviewItems.length ?  reviewItems.map(({
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
            )) : <p className="no-reviews-label">No reviews yet</p>}
        </div>
    )
}
