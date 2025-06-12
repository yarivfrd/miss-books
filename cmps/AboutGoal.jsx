
import { makeLorem, defaultPageAanimations } from "../services/util.service.js";
const { useNavigate } = ReactRouterDOM;

export function AboutGoal() {

    const navigate = useNavigate();

    return (
        <section className={`about-goal ${[...defaultPageAanimations].join(" ")}`}>
            <h2>The goal</h2>
            <p>{makeLorem()}</p>
            <hr />
            <button onClick={() => navigate('/about-us')}>Back</button>
        </section>
    )
}
