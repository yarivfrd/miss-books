
const { useState } = React;

export function AddReview({ handleReviewSubmission }) {

    const [reviewToEdit, setReviewToEdit] = useState({ fullName: '', rating: 0, readAt: '' });

    function handleChange({ target }) {
        let { value, name: field } = target;
        setReviewToEdit(curr => ({ ...curr, [field]: value }));
    }

    return (
        <div className="AddReview">
            <h4>Add Review</h4>
            <form>

                <div className="input-group">
                    <label htmlFor="fullName">Name </label>
                    <input onChange={handleChange} type="text" value={reviewToEdit.fullName} name="fullName" id="fullName" />
                </div>

                <div className="input-group">
                    <label htmlFor="rating">Rating </label>
                    <input onChange={handleChange} type="radio" value={1} name="rating" id="rating" />
                    <input onChange={handleChange} type="radio" value={2} name="rating" id="rating" />
                    <input onChange={handleChange} type="radio" value={3} name="rating" id="rating" />
                    <input onChange={handleChange} type="radio" value={4} name="rating" id="rating" />
                    <input onChange={handleChange} type="radio" value={5} name="rating" id="rating" />
                </div>

                <div className="input-group">
                    <button type="submit" onClick={e => handleReviewSubmission(e, reviewToEdit)}>Submit</button>
                </div>

            </form>
        </div>
    )
}