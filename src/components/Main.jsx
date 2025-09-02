import './Main.css';

function Main() {
  return (
    <main>
      <div className="hero-content">
        <h1>Movie Name</h1>
        <div className="movie-info">
          <span className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
          </span>
          <span>7.3 IMDB</span>
          <span>+16</span>
          <span>2h 25m</span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <ul>
          <li>Starring: Lorem Ipsum</li>
          <li>Genre: Lorem Ipsum</li>
          <li>Tags: Lorem Ipsum</li>
        </ul>
        <a href="">Play Now</a>
      </div>
    </main>
  );
}

export default Main;
