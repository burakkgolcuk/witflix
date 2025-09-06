// src/components/MovieItem.jsx
import { asset } from '../utils/asset';

function MovieItem({ item }) {
  return (
    <div className="item">
      <img src={asset(item.img)} alt={item.name || ''} />
      <div className="movie-item-info d-flex">
        <span>{item.duration}</span>
        <a href="">Play Now</a>
      </div>
    </div>
  );
}

export default MovieItem;
