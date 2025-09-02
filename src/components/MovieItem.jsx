function MovieItem({ item }) {
  return (
    <div className="item">
      <img src={`src/assets/${item.img}`} alt="" />
      <div className="movie-item-info d-flex">
        <span>{item.duration}</span>
        <a href="">Play Now</a>
      </div>
    </div>
  );
}

export default MovieItem;
