// src/components/Footer.jsx
import './Footer.css';
import facebookIcon from '../assets/facebook-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import youtubeIcon from '../assets/youtube-icon.png';
import applestore from '../assets/applestore.png';
import googleplay from '../assets/googleplay.png';

function Footer() {
  return (
    <footer>
      <div className="term d-flex2">
        <nav className="d-flex">
          <a href="">Term of Use</a>
          <a href="">Privacy</a>
          <a href="">FAQ</a>
          <a href="">Watch List</a>
        </nav>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>

      <div className="social d-flex2">
        <h4>Follow Us</h4>
        <div className="apps-logo d-flex">
          <img src={facebookIcon} alt="Facebook" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={youtubeIcon} alt="YouTube" />
        </div>
      </div>

      <div className="apps d-flex2">
        <h4>Apps</h4>
        <div className="apps-logo d-flex">
          <img src={applestore} alt="App Store" />
          <img src={googleplay} alt="Google Play" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
