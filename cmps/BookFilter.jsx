
const { useState, useEffect } = React
export function BookFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field } = target
        switch (target.type) {
            case 'range':
            case 'number':
                value = +target.value
                break
            case 'checkbox':
                value = target.checked
                break
        }
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    const { txt, maxPrice, maxYear, isOnSale } = filterByToEdit
    return (
        <section className="book-filter">
            <form>
                <fieldset>
                    <legend>Filter</legend>
                    <label>Name
                        <input onChange={handleChange} value={txt} name="txt" type="text" id="txt" />
                    </label>
                    <label htmlFor="maxPrice">Max Price
                        <input onChange={handleChange} value={maxPrice} name="maxPrice" type="number" id="maxPrice" />
                    </label>
                    <label htmlFor="maxYear">Max Year
                        <input onChange={handleChange} value={maxYear} name="maxYear" type="number" id="maxYear" />
                    </label>
                    <label htmlFor="isOnSale">
                        <input onChange={handleChange} value={isOnSale} name="isOnSale" type="checkbox" id="isOnSale" />
                        On Sale
                    </label>
                </fieldset>
            </form>
        </section>
    )
}