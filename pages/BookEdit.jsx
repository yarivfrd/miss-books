
import { bookService } from "../services/book.service.js";
import { makeId, makeLorem, getRandomIntInclusive } from '../services/util.service.js';
const { Link, NavLink } = ReactRouterDOM

const { useState } = React

export function BookEdit() {

    const
        [titleVal, setTitleVal] = useState(''),
        [priceVal, setPriceVal] = useState(''),
        [successMsg, setSuccessMsg] = useState(null);

    function handleChange({ target }) {
        let { value, name: field } = target
        switch (field) {
            case 'title':
                setTitleVal(value);
                break
            case 'price':
                setPriceVal(value);
                break
        }
    }

    function onSaveBook(e) {
        e.preventDefault();
        bookService.save({
            title: titleVal,
            subtitle: makeLorem(8),
            authors: [ makeLorem(2) ],
            publishedDate: getRandomIntInclusive(1970, 2025).toString(),
            description: makeLorem(16),
            pageCount: getRandomIntInclusive(30, 1000),
            categories: ['Computers', 'Hack'],
            thumb: 'https://m.media-amazon.com/images/I/91uFdkCJmAL._SL300_.jpg',
            listPrice: {
                amount: priceVal,
                currencyCode: "USD",
                isOnSale: false
            }
        }).then(({ title }) => {setSuccessMsg(`${title} added successfully`)});
    }

    const isEdit = false
    return (
        <section onSubmit={onSaveBook} className="book-edit">
            <h1>{isEdit ? 'Edit' : 'Add'} Book</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" value={titleVal} name="title" id="title" />

                <label htmlFor="price">Price</label>
                <input onChange={handleChange} type="number" value={priceVal} name="price" id="price" />

                <section className="btns flex">
                    <button type="submit">Save</button>
                    <Link to='/book' className="back-btn" >Back</Link>
                </section>
                
                <div className="success-msg">{successMsg}</div>
            </form>
        </section>
    )

}