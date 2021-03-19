import React, { Component } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
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
  state = {
    arrayMovies: [],
  };
  componentDidMount() {
    Api.fetchSearchMovies('superman').then(data => {
      this.setState(prevState => ({
        arrayMovies: [...prevState.arrayMovies, ...data.results],
      }));
    });
  }
  render() {
    return (
      <>
        <PageHeading text="Movies" />
        <Searchbar />
        <Container>
          <MoviesList Movies={this.state.arrayMovies} />
        </Container>
      </>
    );
  }
}

export default MoviesPage;
