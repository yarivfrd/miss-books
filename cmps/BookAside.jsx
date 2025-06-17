
import { BookFilter } from "./BookFilter.jsx";
const { useNavigate } = ReactRouterDOM;

export function BookAside({ onSetFilter, filterBy, onBookReset }) {

    const navigate = useNavigate();

    return (
        <aside className="book-aside">
            <button onClick={() => navigate('/book/edit')}>Add</button>
            <button onClick={() => navigate('/book/add')}>Add Google Book</button>
            <button onClick={() => navigate('/book/stats')}>Stats</button>
            <BookFilter
                onSetFilter={onSetFilter}
                filterBy={filterBy}
            />
            <button className="reset-books-btn" onClick={onBookReset}>Reset Books</button>
        </aside>
    )
}
