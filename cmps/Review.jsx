
import { makeId } from '../services/util.service.js';

export function Review({
    id,
    fullName,
    rating,
    readAt,
    handleReviewDelete
}) {

    function getRatingIcons() {
        const iconArr = [];
        for (let i = 0; i < 5; i++) {
            iconArr.push(
                i <= rating - 1
                ? <i key={makeId()} className="fa fa-bookmark" aria-hidden="true"></i>
                : <i key={makeId()} className="fa fa-bookmark-o" aria-hidden="true"></i>
            );
        }
        return iconArr;
    }
    return (
        <div className="review">
            <span className="name">{fullName}</span>
            <span className="rating">{getRatingIcons()}</span>
            <span className="pubslish-date">{new Date(readAt).toLocaleDateString()} | {new Date(readAt).toLocaleTimeString()}</span>
            <button className="delete-review-btn cta danger" onClick={() => handleReviewDelete(id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
    )
}
