import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="d-flex">
      <Link to="/">
        <img className="logo" src="/src/assets/logo.png" alt="" />
      </Link>
      <nav className="d-flex">
        <Link to="/movies/popüler">Popüler</Link>
        <Link to="/movies/dram">Dram</Link>
        <Link to="/movies/komedi">Komedi</Link>
        <Link to="/movies/korku">Korku</Link>
      </nav>
      <div className="search d-flex">
        <input type="text" placeholder="film ara..." />
        <i className="notif fa-regular fa-bell"></i>
        <i className="profile fa-solid fa-user"></i>
      </div>
    </header>
  );
}

export default Header;
