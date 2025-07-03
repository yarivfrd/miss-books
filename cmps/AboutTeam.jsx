
import { defaultPageAanimations } from "../services/util.service.js";
const { useNavigate } = ReactRouterDOM;

export function AboutTeam() {

    const navigate = useNavigate();

    return (
        <section className={`about-team ${[...defaultPageAanimations].join(" ")}`}>
            <h1 className="page-title">Meet the Team Behind Miss Books</h1>
            <p>At Miss Books, our team is made up of passionate readers, curious minds, and creative spirits who believe in the magic of storytelling. From editors and curators to designers and developers, each member brings a love for books and a commitment to helping readers discover their next great read. We come from diverse backgrounds but share one common goal: to create a warm, welcoming space where literature is celebrated and shared with heart.</p>
            <nav><a onClick={() => navigate('/about-us')}>Back</a></nav>
        </section>
    )
}
