
import { defaultPageAanimations } from '../services/util.service.js';

export function HomePage() {

    return (
        <div className={`home ${[...defaultPageAanimations].join(" ")}`}>
            <section className="welcome">
                <img src="https://raw.githubusercontent.com/yarivfrd/miss-books/refs/heads/main/assets/img/logo.png" alt="Miss Books logo" />
                <h2 className="page-title">Welcome to Miss Books!</h2>
                <h3>Good books for a good price</h3>
            </section>
        </div>
    )
} 