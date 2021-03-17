import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Api from './services/Api';
import AppBar from './components/AppBAr/AppBar';
import Container from './components/Container/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    arrayImages: [],
    searchQuery: '',
    currentPage: 1,
    activeImage: '',
    showModal: false,
    isLoading: true,
    error: null,
  };
  componentDidMount() {
    Api.fetchTrandMovies().then(data => console.log(data));
    Api.fetchSearchMovies('batman').then(data => console.log(data));
    Api.fetchDetailMovies('484718').then(data => console.log(data));
    Api.fetchCreditslMovies('484718').then(data => console.log(data));
    Api.fetchReviewsMovies('484718').then(data => console.log(data));
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     this.fetchImages();
  //   }
  // }
  // fetchImages = () => {
  //   const { searchQuery, currentPage } = this.state;
  //   const options = { searchQuery, currentPage };
  //   this.setState({ isLoading: true });
  //   Api.FetchImages(options)
  //     .then(data => {
  //       this.setState(prevState => ({
  //         arrayImages: [...prevState.arrayImages, ...data],
  //         currentPage: prevState.currentPage + 1,
  //       }));
  //     })
  //     .catch(error => this.setState({ error }))
  //     .finally(() => {
  //       this.setState({ isLoading: false });
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //     });
  // };
  // getLargeImg = (url, tag) => {
  //   this.setState({ activeImage: { url, tag } });
  //   this.toggleModal();
  // };
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  //   if (this.state.showModal) {
  //     this.setState({
  //       activeImage: '',
  //     });
  //   }
  // };
  // onChangeQuery = query => {
  //   this.setState({
  //     searchQuery: query,
  //     arrayImages: [],
  //     currentPage: 1,
  //   });
  // };

  render() {
    const {
      arrayImages,
      activeImage,
      showModal,
      isLoading,
      error,
    } = this.state;
    return (
      <div className="App">
        <Container>
          <AppBar />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" component={MoviesPage} />
            {/* <Route path="/contact" component={Contact} />
          <Route component={NotFound} /> */}
          </Switch>

          {/* <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery>
          <ImageGalleryItem
            Images={arrayImages}
            getLargeImg={this.getLargeImg}
          />
        </ImageGallery>
        {error && (
          <div className="errorMassege">
            Whoops, something went wrong: {error.message}
          </div>
        )}
        {!isLoading && <Button clickLoad={this.fetchImages} />}
        {isLoading && <Loader />}
        {showModal && (
          <Modal activeImage={activeImage} toggleModal={this.toggleModal} />
        )} */}
        </Container>
      </div>
    );
  }
}

export default App;
