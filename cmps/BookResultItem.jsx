
import { defaultPageAanimations } from "../services/util.service.js";

export function BookResultItem({ id, volumeInfo, onAddGoogleBook }) {
    console.log(volumeInfo);
    const {
        title,
        imageLinks
    } = volumeInfo;
    return (
        <li
            className={`book-result-item ${[...defaultPageAanimations].join(' ')}`}
            onClick={() => onAddGoogleBook(id)}
        >
            <img src={imageLinks && imageLinks.thumbnail || 'https://placehold.co/270x400?text=Cover+Not+Available'} alt={`${title} - book cover`} />
            <h3>{volumeInfo.title}</h3>
        </li>
    )
}