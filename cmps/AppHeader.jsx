const { NavLink, useNavigate } = ReactRouterDOM

export function AppHeader() {

    const navigate = useNavigate()

    return (
        <header className="app-header full main-layout animate__animated animate__fadeInDown">
            <section>
                <img onClick={() => { navigate('/') }} className="logo" src="https://raw.githubusercontent.com/yarivfrd/miss-books/ffb7fb1b88215a362b54abf56fb7dfd7c7526203/assets/img/logo.svg" alt="logo" />
                <nav className="app-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-us">About</NavLink>
                    <NavLink to="/book">Books</NavLink>
                </nav>
            </section>
        </header>
    )
}