import React, { Component } from 'react';
import Api from '../services/Api';
import PageHeading from '../components/PageHeading/PageHeading';
import MoviesList from '../components/MoviesList';
import Container from '../components/Container/Container';

class HomePage extends Component {
  state = {
    arrayMovies: [],
  };
  componentDidMount() {
    Api.fetchTrandMovies().then(data => console.log(data));
    Api.fetchTrandMovies().then(data => {
      this.setState(prevState => ({
        arrayMovies: [...prevState.arrayMovies, ...data.results],
      }));
    });
  }
  render() {
    return (
      <>
        <PageHeading text="Добро пожаловать" />
        <Container>
          <MoviesList Movies={this.state.arrayMovies} />
        </Container>
      </>
    );
  }
}

export default HomePage;
