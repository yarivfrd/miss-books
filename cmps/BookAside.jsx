
import { BookFilter } from "./BookFilter.jsx";
const { useNavigate } = ReactRouterDOM;

export function BookAside({ onSetFilter, filterBy, onBookReset }) {

    const navigate = useNavigate();

    return (
        <aside>
            <button onClick={() => navigate('/book/edit')}>Add New Manually</button>
            <button onClick={() => navigate('/book/add')}>Add New From Google</button>
            <BookFilter
                onSetFilter={onSetFilter}
                filterBy={filterBy}
            />
            <button onClick={onBookReset}>Reset Books</button>
        </aside>
    )
}
