import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBAr/AppBar';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundViews from './views/NotFoundViews';
import Loader from './components/Loader';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage.js' /* webpackChunkName: "movie-page" */),
);

class App extends Component {
  render() {
    const { home, movies, movieDetails } = routes;
    return (
      <div className="App">
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={home} component={HomePage} />
            <Route path={movieDetails} component={MovieDetailsPage} />
            <Route exact path={movies} component={MoviesPage} />
            <Route component={NotFoundViews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
