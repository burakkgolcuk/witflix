import MovieItem from './MovieItem';
import './Recommended.css';
import { Link } from 'react-router-dom';

function Recommended(props) {
  const { rec, head } = props;

  return (
    <section id="recommended">
      <div className="movies-header d-flex">
        <h2>{head} Movies</h2>
        <Link to="/movies">View all</Link>
      </div>
      <div className="movies d-flex">
        {rec.map((item) => (
          <MovieItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Recommended;
