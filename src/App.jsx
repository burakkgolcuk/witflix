import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Movies from './components/Movies';
import Popular from './components/Popular';
import Recommended from './components/Recommended';
import MoviePage from './components/MoviePage';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('/movies.json')
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
            <Popular
              popular={movies.filter((item) => item.type === 0)}
              head={'Popular'}
            />
            <Recommended
              rec={movies.filter((item) => item.type === 1)}
              head={'Recommended'}
            />
          </Route>
          <Route path="/movies/:cat?">
            <Movies filmler={movies} />
          </Route>
          <Route path="/movie-page/:id">
            <MoviePage filmler={movies} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
