
import { bookService } from "../services/book.service.js";
import { makeLorem, getRandomIntInclusive, defaultPageAanimations } from '../services/util.service.js';
import { showSuccessMsg } from "../services/event-bus.service.js";
const { useNavigate, useParams } = ReactRouterDOM;

const { useState, useEffect } = React

export function BookEdit() {

    const
        [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook()),
        navigate = useNavigate(),
        params = useParams(),
        isEdit = Object.keys(params).length > 0;

    useEffect(() => {
        if (isEdit) populateFields();
    }, []);

    function populateFields() {
        bookService
            .get(params.bookId)
            .then(({title, listPrice}) => {
                console.log(title, listPrice.amount);
                setBookToEdit(curr => ({...curr, title, amount: listPrice.amount}));
            })
            .catch(err => {
                console.error(`Failed to fetch book: ${err}`);
            })
    }

    function handleChange({ target }) {
        console.dir(target.name);
        
        let { value, name: field } = target;
        setBookToEdit(curr => ({...curr, [field]: value}));
    }

    function onSaveBook(e) {
        e.preventDefault();
        bookService.save({
            id: params.bookId,
            title: bookToEdit.title,
            subtitle: makeLorem(8),
            authors: [ makeLorem(2) ],
            publishedDate: getRandomIntInclusive(1970, 2025).toString(),
            description: makeLorem(16),
            pageCount: getRandomIntInclusive(30, 1000),
            categories: ['Computers', 'Hack'],
            thumbnail: 'https://m.media-amazon.com/images/I/91uFdkCJmAL._SL300_.jpg',
            language: 'en',
            listPrice: {
                amount: bookToEdit.amount,
                currencyCode: "USD",
                isOnSale: false
            }
        }).then(({ title }) => {
            showSuccessMsg(`${title} added successfully`);
            navigate('/book');
        });
    }
    
    return (
        <section onSubmit={onSaveBook} className={`book-edit ${[...defaultPageAanimations].join(' ')}`}>
            <h1>{isEdit ? 'Edit' : 'Add'} Book</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" value={bookToEdit.title} name="title" id="title" />

                <label htmlFor="price">Price</label>
                <input onChange={handleChange} type="number" value={bookToEdit.amount || ''} name="amount" id="amount" />

                <section className="btns flex">
                    <button type="submit">Save</button>
                    <button onClick={() => navigate('/book')}>Back</button>
                </section>
        
            </form>
        </section>
    )

}