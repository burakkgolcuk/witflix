import './Footer.css';

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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="social d-flex2">
        <h4>Follow Us</h4>
        <div className="apps-logo d-flex">
          <img src="src/assets/facebook-icon.png" alt="" />
          <img src="src/assets/twitter-icon.png" alt="" />
          <img src="src/assets/youtube-icon.png" alt="" />
        </div>
      </div>
      <div className="apps d-flex2">
        <h4>Apps</h4>
        <div className="apps-logo d-flex">
          <img src="src/assets/applestore.png" alt="" />
          <img src="src/assets/googleplay.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
