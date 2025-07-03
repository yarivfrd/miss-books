
import LongTxt from '../cmps/LongTxt.jsx';
import { defaultPageAanimations } from '../services/util.service.js';
const { useNavigate } = ReactRouterDOM;

export function AboutUs() {

    const navigate = useNavigate();

    return (
        <div className={`about ${[...defaultPageAanimations].join(' ')}`}>
            <h1 className='page-title'>About Miss Books</h1>
            <p className='page-description'>At Miss Books, we believe every story has the power to spark imagination and inspire growth. Our mission is to bring readers closer to the books they love — from bestsellers to hidden gems — all curated with care and passion. Whether you’re a lifelong bookworm or just beginning your reading journey, Miss Books is your welcoming corner of the literary world.</p>
            <nav>
                <a onClick={() => navigate('/about-us/team')}>Meet our team</a>
                <a onClick={() => navigate('/about-us/goal')}>Discover our goal</a>
            </nav>
            <hr />
            <h2>LongTxt Cmp Demo</h2>
            <LongTxt />
        </div>

    )
}