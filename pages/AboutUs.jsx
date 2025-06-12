
import LongTxt from '../cmps/LongTxt.jsx';
import { defaultPageAanimations } from '../services/util.service.js';
const { useNavigate } = ReactRouterDOM;

export function AboutUs() {

    const navigate = useNavigate();

    return (
        <div className={`about ${[...defaultPageAanimations].join(' ')}`}>
            <h2>About books and us...</h2>
            <LongTxt />
            <hr />
            <button onClick={() => navigate('/about-us/team')}>Team</button>
            <button onClick={() => navigate('/about-us/goal')}>Goal</button>
        </div>

    )
}