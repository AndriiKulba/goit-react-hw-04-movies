import React, { Component } from 'react';
import Api from '../services/Api';
import PageHeading from '../components/PageHeading/PageHeading';
import MoviesList from '../components/MoviesList';
import Container from '../components/Container/Container';
import Button from '../components/Button';
import Loader from '../components/Loader';

class HomePage extends Component {
  state = {
    arrayMovies: [],
    currentPage: 1,
    isLoading: true,
    error: null,
  };
  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const { currentPage } = this.state;

    this.setState({ isLoading: true });
    Api.fetchTrandMovies(currentPage)
      .then(data => {
        this.setState(prevState => ({
          arrayMovies: [...prevState.arrayMovies, ...data.results],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };
  render() {
    const { arrayMovies, isLoading } = this.state;
    return (
      <>
        <PageHeading text="Trending week" />
        <Container>
          <MoviesList Movies={this.state.arrayMovies} />
        </Container>
        <Container>
          {!isLoading && arrayMovies.length > 0 && (
            <Button clickLoad={this.fetchMovies} />
          )}
        </Container>
        <Container>{isLoading && <Loader />}</Container>
      </>
    );
  }
}

export default HomePage;
