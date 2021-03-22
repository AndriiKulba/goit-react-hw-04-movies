import React, { Component } from 'react';
import Api from '../services/Api';
import PageHeading from '../components/PageHeading';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';
import Container from '../components/Container/Container';
import Button from '../components/Button';
import Loader from '../components/Loader';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    arrayMovies: [],
    currentPage: 1,
    isLoading: false,
    error: null,
  };
  async componentDidMount() {
    this.props.location.query &&
      this.setState({
        searchQuery: this.props.location.query,
        arrayMovies: [],
      });
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }
  fetchMovies = () => {
    const { searchQuery, currentPage } = this.state;

    this.setState({ isLoading: true });
    Api.fetchSearchMovies(searchQuery, currentPage)
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
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      arrayMovies: [],
    });
    this.props.history.push({
      search: `query=${query}`,
      query,
    });
  };

  render() {
    const { arrayMovies, isLoading, error } = this.state;

    return (
      <>
        <PageHeading text="Movies" />
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && (
          <div className="errorMassege">
            Whoops, something went wrong: {error.message}
          </div>
        )}
        <Container>
          <MoviesList Movies={arrayMovies} />
        </Container>
        <Container>
          {!isLoading && arrayMovies.length !== 0 && (
            <Button clickLoad={this.fetchMovies} />
          )}
        </Container>
        <Container>{isLoading && <Loader />}</Container>
      </>
    );
  }
}

export default MoviesPage;
