import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Api from '../../services/Api';
import Cast from '../Cast';
import defaultImage from './poster.png';
import s from './DetailsMovie.module.css';
import Reviews from '../Reviews/Reviews';
import routes from '../../routes';

class DetailsMovie extends Component {
  state = { error: null };
  getImage(bd) {
    return bd ? Api.fetchImage(bd) : defaultImage;
  }
  componentDidMount() {
    Api.fetchDetailMovies(Number(this.props.match.params.movieid))
      .then(data => {
        this.setState({ ...data });
      })
      .catch(error => this.setState({ error }));
  }
  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const {
      error,
      title,
      poster_path,
      vote_average,
      overview,
      genres,
    } = this.state;
    const { location } = this.props;
    return (
      <>
        {error && (
          <div className="errorMassege">
            Whoops, something went wrong: {error.message}
          </div>
        )}
        <button className={s.BackBtn} onClick={this.handleGoBack}>
          Go back
        </button>

        <div className={s.MoviePage}>
          <div className={s.MovieImage}>
            <img
              src={this.getImage(poster_path)}
              alt={title}
              className={s.MovieImage__img}
            />
          </div>
          <div className={s.MovieInfo}>
            <h2>{title}</h2>
            <p>Vote: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>
              {genres &&
                genres.map(genre => {
                  return (
                    <span key={genre.id} className={s.GenresItem}>
                      {genre.name}
                    </span>
                  );
                })}
            </p>
          </div>
        </div>
        <div className={s.AdditInfo}>
          <h3>Additional information</h3>
          <p>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: { ...location.state },
              }}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
          </p>
          <Route
            path={`${this.props.match.path}/cast`}
            render={props => <Cast {...props} actors={this.state.credits} />}
          />
          <p>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: { ...location.state },
              }}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Reviews
            </NavLink>
          </p>
          <Route
            path={`${this.props.match.path}/reviews`}
            render={props => (
              <Reviews {...props} reviews={this.state.reviews} />
            )}
          />
        </div>
      </>
    );
  }
}

export default DetailsMovie;
