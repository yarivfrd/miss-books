const { useNavigate } = ReactRouterDOM;

export function NotFound() {

    const navigate = useNavigate();

    return (
        <section className="not-found">
            <h2>Ooops... Error <span style={{ color: 'red' }}>404</span></h2>
            <p>
                Sorry but the page you are looking for does not exist.
            </p>
            <button onClick={() => {navigate('/')}}>Back Home</button>
        </section>
    )
}