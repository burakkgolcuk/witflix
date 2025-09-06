// src/components/Movies.jsx
import { useEffect, useState } from 'react';
import './Movies.css';
import { Link, useParams } from 'react-router-dom';
import { asset } from '../utils/asset';

function Movies({ filmler }) {
  const [movies, setMovies] = useState(filmler);
  const { cat } = useParams();

  useEffect(() => {
    if (cat) {
      setMovies(
        filmler.filter((item) => item.cat.toLowerCase() === cat.toLowerCase())
      );
    } else {
      setMovies(filmler);
    }
  }, [cat, filmler]);

  return (
    <div className="movieList">
      {movies.map((item) => (
        <Link key={item.id} to={`/movie-page/${item.id}`}>
          <img src={asset(item.img)} alt={item.name} />
        </Link>
      ))}
    </div>
  );
}

export default Movies;
