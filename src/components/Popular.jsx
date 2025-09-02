import MovieItem from './MovieItem';
import './Popular.css';
import { Link } from 'react-router-dom';

function Popular({ popular, head }) {
  return (
    <section id="popular">
      <div className="movies-header d-flex">
        <h2>{head} Movies</h2>
        <Link to="/movies">View all</Link>
      </div>
      <div className="movies d-flex">
        {popular.map((item) => (
          <MovieItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Popular;
