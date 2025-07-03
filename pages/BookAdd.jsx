import { debounce, defaultPageAanimations } from "../services/util.service.js";
import googleBookService from "../services/google-book.service.js";
import { bookService } from '../services/book.service.js'
import { BookResultItem } from "../cmps/BookResultItem.jsx";
const { useEffect, useState, useRef } = React;
const { useNavigate } = ReactRouterDOM;

export function BookAdd() {

    const
        [searchInputVal, setSearchInputVal] = useState(''),
        [googleBooksData, setGoogleBooksData] = useState([]),
        navigate = useNavigate(),
        debouncedFetchBooks = useRef(debounce(fetchBooks, 500)).current;

    useEffect(() => {
        if (searchInputVal) {
            debouncedFetchBooks(searchInputVal)
        }
    }, [searchInputVal])

    function handleSearchInput(e) {
        setSearchInputVal(e.target.value);
    }

    function fetchBooks(inputVal) {
        googleBookService.query(inputVal).then(res => {
            setGoogleBooksData(res.items || []);
        });
    }

    function handleAddGoogleBook(googleBookId) {
        const clickedItem = googleBooksData.find(book => book.id === googleBookId);
        bookService.addGoogleBook(clickedItem).then(() => {
            navigate('/book');
        })
            .catch(err => {
                console.error('Failed to add google book: ', err);
            });
    }

    return (
        <section className={`book-add ${[...defaultPageAanimations].join(' ')}`}>

            <form>
                <fieldset>
                    <h2 className="form-title">Add Google Book</h2>

                    <div className="input-group">
                        <label htmlFor="google-book-search">Search</label>
                        <input
                            name="google-book-search"
                            type="search"
                            onChange={handleSearchInput}
                            value={searchInputVal}
                        />
                    </div>

                    <div className="input-group">
                        <button onClick={() => navigate('/book')}>Back</button>
                    </div>

                </fieldset>
            </form>

            <ul>
                {googleBooksData.map(({ id, volumeInfo }) =>
                    <BookResultItem
                        key={id}
                        id={id}
                        volumeInfo={volumeInfo}
                        onAddGoogleBook={handleAddGoogleBook}
                    />
                )}
            </ul>

        </section>
    )
}
