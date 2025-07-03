
const { useState } = React;

export function AddReview({ handleReviewSubmission }) {

    const [reviewToEdit, setReviewToEdit] = useState({ fullName: '', rating: 0, readAt: '' });

    function handleChange({ target }) {
        let { value, name: field } = target;
        if (typeof name === 'rating') value = +value;
        setReviewToEdit(curr => ({ ...curr, [field]: value }));
    }

    function clearForm() {
        setReviewToEdit(curr => ({ ...curr, fullName: '', rating: 0 }));
    }

    return (
        <div className="add-review">
            <form>
                <fieldset>
                    <h2 className="form-title">Add Review</h2>

                    <div className="input-group">
                        <label htmlFor="fullName">Name</label>
                        <input onChange={handleChange} type="text" value={reviewToEdit.fullName} name="fullName" id="fullName" />
                    </div>

                    <div className="input-group">
                        <label>Rating</label>
                        <div id="rating" className="radio-group">

                            <label htmlFor="option-1">{reviewToEdit.rating >= 1 ? <i className="fa fa-bookmark" aria-hidden="true"></i> : <i className="fa fa-bookmark-o" aria-hidden="true"></i>}</label>
                            <input onChange={handleChange} type="radio" value={1} id='option-1' name="rating" />

                            <label htmlFor="option-2">{reviewToEdit.rating >= 2 ? <i className="fa fa-bookmark" aria-hidden="true"></i> : <i className="fa fa-bookmark-o" aria-hidden="true"></i>}</label>
                            <input onChange={handleChange} type="radio" value={2} id='option-2' name="rating" />

                            <label htmlFor="option-3">{reviewToEdit.rating >= 3 ? <i className="fa fa-bookmark" aria-hidden="true"></i> : <i className="fa fa-bookmark-o" aria-hidden="true"></i>}</label>
                            <input onChange={handleChange} type="radio" value={3} id='option-3' name="rating" />

                            <label htmlFor="option-4">{reviewToEdit.rating >= 4 ? <i className="fa fa-bookmark" aria-hidden="true"></i> : <i className="fa fa-bookmark-o" aria-hidden="true"></i>}</label>
                            <input onChange={handleChange} type="radio" value={4} id='option-4' name="rating" />

                            <label htmlFor="option-5">{reviewToEdit.rating >= 5 ? <i className="fa fa-bookmark" aria-hidden="true"></i> : <i className="fa fa-bookmark-o" aria-hidden="true"></i>}</label>
                            <input onChange={handleChange} type="radio" value={5} id='option-5' name="rating" />
                        </div>
                    </div>

                    <div className="input-group">
                        <button className="cta" type="submit" onClick={e => handleReviewSubmission(e, reviewToEdit, clearForm)}>Submit</button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}