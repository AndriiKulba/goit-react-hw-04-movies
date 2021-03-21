import React, { Component } from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import Api from '../services/Api';
import PageHeading from '../components/PageHeading';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';
import Container from '../components/Container/Container';

class MoviesPage extends Component {
  //   const { url } = useRouteMatch();
  //   const [books, setBooks] = useState(null);

  //   useEffect(() => {
  //     bookShelfAPI.fetchBooks().then(setBooks);
  //   }, []);
  state = { searchQuery: '', arrayMovies: [] };
  // componentDidMount() {
  //   this.fetchMovies();
  // }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }
  fetchMovies = () => {
    const { searchQuery } = this.state;
    console.log(searchQuery);
    Api.fetchSearchMovies(searchQuery).then(data => {
      this.setState(prevState => ({
        arrayMovies: [...prevState.arrayMovies, ...data.results],
      }));
    });
  };
  onChangeQuery = query => {
    console.log(12345);
    this.setState({
      searchQuery: query,
      arrayMovies: [],
    });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { searchQuery, arrayMovies } = this.state;

    return (
      <>
        <PageHeading text="Movies" />
        <Searchbar onSubmit={this.onChangeQuery} />
        <Container>
          <MoviesList Movies={this.state.arrayMovies} />
        </Container>
      </>
    );
  }
}

export default MoviesPage;
