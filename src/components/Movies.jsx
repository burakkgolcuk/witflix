import { useEffect, useState } from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Movies({ filmler }) {
  const [movies, setMovies] = useState(filmler);
  const [loading, setLoading] = useState(true);

  const { cat } = useParams();

  useEffect(() => {
    if (cat) {
      const finded = filmler.filter(
        (item) => item.cat.toLowerCase() === cat.toLowerCase()
      );
      setMovies(finded);
    } else {
      setMovies(filmler);
    }
  }, [cat, filmler]);

  return (
    <div className="movieList">
      {movies.map((item) => (
        <Link key={item.id} to={`/movie-page/${item.id}`}>
          <img src={`/src/assets/${item.img}`} alt="" />
        </Link>
      ))}
    </div>
  );
}

export default Movies;
