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
    if (searchInputVal) debouncedFetchBooks(searchInputVal);
  }, [searchInputVal])

  function handleSearchInput(e) {
    setSearchInputVal(e.target.value.trim());

  }

  function fetchBooks(inputVal) {
    googleBookService.query(inputVal).then(res => {
      setGoogleBooksData(res.items || []);
    });
  }

  function handleAddGoogleBook(googleBookId) {
    const clickedItem = googleBooksData.find(book => book.id === googleBookId);
    bookService.addGoogleBook(clickedItem);
  }

  return (
    <section className={`book-add ${[...defaultPageAanimations].join(' ')}`}>
      <button onClick={() => navigate('/book')}>Back</button>
      <h1>Add Google Book</h1>
      <form>
        <label>
          Search
          <br />
          <input
            name="google-book-search"
            type="search"
            onChange={handleSearchInput}
            value={searchInputVal}
          />
        </label>
      </form>
      <ul>
        {googleBooksData.map(({ id, volumeInfo }) =>
          <BookResultItem
            key={id}
            id={id}
            title={volumeInfo.title}
            onAddGoogleBook={handleAddGoogleBook}
          />
        )}
      </ul>
    </section>
  )
}
