import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Api from '../services/Api';
import PageHeading from '../components/PageHeading/PageHeading';
import MoviesList from '../components/MoviesList';
import Container from '../components/Container/Container';

class HomePage extends Component {
  state = {
    arrayMovies: [],
  };
  componentDidMount() {
    Api.fetchTrandMovies()
      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          arrayMovies: [...prevState.arrayMovies, ...data.results],
        }));
      })
      .catch(error => error);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <PageHeading text="Trending week" />
        <Container>
          <MoviesList Movies={this.state.arrayMovies} />
          {/* <Route
            path={`${this.props.match.path}`}
            render={props => (
              <MoviesList {...props} Movies={this.state.arrayMovies} />
            )}
          /> */}
        </Container>
      </>
    );
  }
}

export default HomePage;
