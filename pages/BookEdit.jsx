
import { bookService } from "../services/book.service.js";
import { makeLorem, getRandomIntInclusive, defaultPageAanimations } from '../services/util.service.js';
import { showSuccessMsg } from "../services/event-bus.service.js";
const { useNavigate } = ReactRouterDOM;

const { useState } = React

export function BookEdit() {

    const
        [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook()),
        navigate = useNavigate();

    function handleChange({ target }) {
        let { value, name: field } = target;
        setBookToEdit(curr => ({...curr, [field]: value}));
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
            thumbnail: 'https://m.media-amazon.com/images/I/91uFdkCJmAL._SL300_.jpg',
            listPrice: {
                amount: priceVal,
                currencyCode: "USD",
                isOnSale: false
            }
        }).then(({ title }) => {
            showSuccessMsg(`${title} added successfully`);
            navigate('/book');
        });
    }

    const
        titleVal = bookToEdit.title,
        priceVal = bookToEdit.listPrice.amount;

    const isEdit = false
    
    return (
        <section onSubmit={onSaveBook} className={`book-edit ${[...defaultPageAanimations].join(' ')}`}>
            <h1>{isEdit ? 'Edit' : 'Add'} Book</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" value={titleVal} name="title" id="title" />

                <label htmlFor="price">Price</label>
                <input onChange={handleChange} type="number" value={priceVal} name="price" id="price" />

                <section className="btns flex">
                    <button type="submit">Save</button>
                    <button onClick={() => navigate('/book')}>Back</button>
                </section>
        
            </form>
        </section>
    )

}