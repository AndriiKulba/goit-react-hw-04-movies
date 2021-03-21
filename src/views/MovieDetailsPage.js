import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Container from '../components/Container/Container';
import DetailsMovie from '../components/DetailsMovie';

class MovieDetailsPage extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Container>
          <Route
            path={`${this.props.match.path}`}
            render={props => <DetailsMovie {...props} />}
          />
        </Container>
      </>
    );
  }
}

export default MovieDetailsPage;
