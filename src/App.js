import React, { Component } from 'react';
import Api from './services/Api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Button from './components/Button';

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
    Api.FetchImages().then(data => console.log(data));
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
      </div>
    );
  }
}

export default App;
