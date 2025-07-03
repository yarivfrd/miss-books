
import { bookService } from "../services/book.service.js";
import { defaultPageAanimations, makeLorem, getRandomIntInclusive } from '../services/util.service.js';
const { useNavigate, useParams } = ReactRouterDOM;

const { useState, useEffect } = React

export function BookEdit() {

    const
        params = useParams(),
        isEdit = Object.keys(params).length > 0,
        [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook()),
        [isDisabled, setIsDisabled] = useState(isEdit ? true : false),
        navigate = useNavigate();

    useEffect(() => {
        if (isEdit) populateFields();
    }, []);

    function populateFields() {
        bookService
            .get(params.bookId)
            .then(book => {
                setBookToEdit(book);
                setIsDisabled(false);
            })
            .catch(err => {
                console.error(`Failed to fetch book: ${err}`);
            })
    }

    function handleChange({ target }) {
        let { value, name: field } = target;
        switch (field) {
            case 'amount':
                setBookToEdit(curr => ({
                    ...curr,
                    listPrice: {
                        amount: value,
                        currencyCode: curr.listPrice.currencyCode,
                        isOnSale: curr.listPrice.isOnSale
                    }
                }));
            default:
                setBookToEdit(curr => ({ ...curr, [field]: value }));
        }
    }

    function onSaveBook(e) {
        e.preventDefault();
        bookService.save(isEdit ? {
            ...bookToEdit,
            id: params.bookId,
            title: bookToEdit.title,
            listPrice: {
                amount: bookToEdit.amount,
                currencyCode: bookToEdit.listPrice.currencyCode,
                isOnSale: bookToEdit.listPrice.isOnSale,
            },
        } : {
            title: bookToEdit.title,
            subtitle: makeLorem(8),
            authors: [makeLorem(2)],
            publishedDate: getRandomIntInclusive(1970, 2025).toString(),
            description: makeLorem(16),
            pageCount: getRandomIntInclusive(30, 1000),
            categories: ["Computers", "Hack"],
            thumbnail:
                "https://m.media-amazon.com/images/I/91uFdkCJmAL._SL300_.jpg",
            language: "en",
            listPrice: {
                amount: bookToEdit.amount,
                currencyCode: "USD",
                isOnSale: false,
            },
            reviews: []
        }).then(() => {
            navigate('/book');
        });
    }

    return (
        <section onSubmit={onSaveBook} className={`book-edit ${[...defaultPageAanimations].join(' ')}`}>
            <form className={isDisabled ? 'disabled' : ''}>
                <fieldset>
                    <h2 className="form-title">{isEdit ? 'Edit' : 'Add'} Book</h2>

                    <div className="input-group">
                        <label htmlFor="title">Title</label>
                        <input onChange={handleChange} type="text" value={bookToEdit.title} name="title" id="title" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="price">Price</label>
                        <input onChange={handleChange} type="number" value={bookToEdit.listPrice.amount || ''} name="amount" id="amount" />
                    </div>

                    <div className="input-group">
                        <button className="cta" type="submit">Save</button>
                        <button onClick={() => navigate(isEdit ? `/book/${params.bookId}` : '/book')}>Back</button>
                    </div>

                </fieldset>

            </form>
        </section>
    )

}