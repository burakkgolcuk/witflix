// src/components/MoviePage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MoviePage.css';
import CommentForm from './CommentForm';
import { asset } from '../utils/asset';

function MoviePage({ filmler }) {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    setFilm(filmler.find((item) => item.id === Number(id)) || null);
  }, [id, filmler]);

  if (!film) return null;

  return (
    <div className="movie-detail">
      <img src={asset(film.img)} alt={film.name} />
      <h1>{film.name}</h1>
      <div className="comments">
        <CommentForm />
      </div>
    </div>
  );
}

export default MoviePage;
