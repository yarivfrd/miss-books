
export function BookResultItem({ id, title, onAddGoogleBook }) {
  return (
    <li className="BookResultItem">
        <span>{title}</span><button onClick={() => onAddGoogleBook(id)}>+</button>
    </li>
  )
}