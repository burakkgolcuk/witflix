import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './MoviePage.css';
import CommentForm from './CommentForm';

function MoviePage(props) {
  const { filmler } = props;
  const { id } = useParams();

  const [film, setFilm] = useState({});

  useEffect(() => {
    const finded = filmler.find((item) => item.id === Number(id));
    setFilm(finded);
  }, [id]);

  return (
    <div className="movie-detail">
      <img src={`/src/assets/${film.img}`} alt="" />
      <h1>{film.name}</h1>
      <div className="comments">
        <CommentForm />
      </div>
    </div>
  );
}

export default MoviePage;
