
import { defaultPageAanimations } from '../services/util.service.js';
const { useNavigate } = ReactRouterDOM;

export function HomePage() {

    const navigate = useNavigate();

    return (
        <div className={`home ${[...defaultPageAanimations].join(" ")}`}>
            <section className="hero">
                <h1 className="page-title">Find Your<br />Next Book</h1>
                <button className='cta' onClick={() => navigate('/book')}>
                    Explore Now
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
            </section>
        </div>
    )
} 