const { NavLink, useNavigate } = ReactRouterDOM

export function AppHeader() {

    const navigate = useNavigate()

    return (
        <header className="app-header full main-layout animate__animated animate__fadeInDown">
            <section>
                <img onClick={() => {navigate('/')}} className="logo" src="../assets/img/logo.svg" alt="logo" />
                <nav className="app-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-us">About</NavLink>
                    <NavLink to="/book">Books</NavLink>
                </nav>
            </section>
        </header>
    )
}