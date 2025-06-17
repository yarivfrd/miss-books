
import { bookService } from "../services/book.service.js";
import { defaultPageAanimations } from "../services/util.service.js";

const { useState, useEffect } = React;

export function BookStats() {

  const [statsData, setStatsData] = useState(null);

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
      {Object.entries(statsData).map(([name, percentage]) => {
        return (
          <div className="graph-item" key={name}>
            <div className="cat-percentage">{percentage}%</div>
            <div className="meter" style={{height: percentage * 2}}></div>
            <div className="cat-name">{name}</div>
          </div>
        );
      })}
    </section>
  );
}
