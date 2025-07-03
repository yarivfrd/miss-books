
const { useState, useEffect } = React;

export function BookFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit);
    }, [filterByToEdit]);

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

    const { txt, maxPrice, maxYear, isOnSale } = filterByToEdit;
    return (
        <section className="book-filter">
            <form>
                <fieldset>
                    <h2 className="form-title">Filter</h2>

                    <div className="input-group checkbox">
                        <input onChange={handleChange} checked={isOnSale} name="isOnSale" type="checkbox" id="isOnSale" />
                        <label htmlFor="isOnSale">On Sale</label>
                    </div>

                    <div className="input-group">
                        <label htmlFor="txt">Name</label>
                        <input onChange={handleChange} value={txt} name="txt" type="search" id="txt" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="maxPrice">Max Price</label>
                        <input onChange={handleChange} value={maxPrice || ''} name="maxPrice" type="number" id="maxPrice" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="maxYear">Max Year</label>
                        <input onChange={handleChange} value={maxYear || ''} name="maxYear" type="number" id="maxYear" />
                    </div>

                </fieldset>
            </form>
        </section>
    )
}