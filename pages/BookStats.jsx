
import { bookService } from "../services/book.service.js";
import { defaultPageAanimations } from "../services/util.service.js";

const
  { useState, useEffect } = React,
  { useNavigate } = ReactRouterDOM;

export function BookStats() {

  const
    [statsData, setStatsData] = useState(null),
    navigate = useNavigate();

  useEffect(() => {
    bookService
      .getDashboardData()
      .then(data => {
        console.log(data);
        setStatsData(data)
      });
  }, []);

  if (!statsData) return <div>Loading...</div>;
  return (
    <section className={`book-stats ${[...defaultPageAanimations].join(" ")}`}>
      <nav className="navigation">
        <button onClick={() => navigate('/book')}><i className="fa fa-chevron-left back-to-books-btn" aria-hidden="true"></i>Books</button>
      </nav>
      <div className="graph">
        {Object.entries(statsData).map(([name, percentage]) => {
          return (
            <div className="graph-item" key={name}>
              <div className="cat-percentage">{percentage}%</div>
              <div className="meter" style={{ height: percentage * 2 }}></div>
              <div className="cat-name">{name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
