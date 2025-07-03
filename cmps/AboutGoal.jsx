
import { defaultPageAanimations } from "../services/util.service.js";
const { useNavigate } = ReactRouterDOM;

export function AboutGoal() {

    const navigate = useNavigate();

    return (
        <section className={`about-goal ${[...defaultPageAanimations].join(" ")}`}>
            <h1 className="page-title">Our Goal at Miss Books</h1>
            <p>Our goal at Miss Books is simple: to ignite a lifelong love of reading. We aim to make discovering books feel personal, joyful, and inspiring — whether it’s a timeless classic, a modern must-read, or an unexpected hidden gem. By thoughtfully curating our collection and designing a reader-friendly experience, we strive to connect each visitor with the stories that move them, teach them, and stay with them long after the last page.</p>
            <nav><a onClick={() => navigate('/about-us')}>Back</a></nav>
        </section>
    )
}
