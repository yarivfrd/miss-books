
import { makeLorem } from "../services/util.service.js";
const { useNavigate } = ReactRouterDOM;

export function AboutTeam() {

    const navigate = useNavigate();

    return (
        <section className="about-team">
            <h2>About the team</h2>
            <p>{makeLorem()}</p>
            <hr />
            <button onClick={() => navigate('/about-us')}>Back</button>
        </section>
    )
}
