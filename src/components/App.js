import React, { Component } from 'react';

import { GlobalStyle } from './GlobalStyle';
import { SearchBar } from './Searchbar';
import { AppContainer } from './App.styled';
import { ImageCallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';

import { Layout } from './Layout';
import { getImages } from 'services/APIs';
import { Notify } from 'notiflix';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    error: null,
    isLoading: false,
    totalImages: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { query, page } = this.state;
    const options = { query, page };
    console.log(options.query);

    try {
      this.setState({ isLoading: true });

      const { hits, totalHits } = await getImages(options);
      console.log(totalHits);
      console.log(hits);

      const nextImages = hits.map(
        ({ id, webformatURL, tags, largeImageURL }) => ({
          id,
          webformatURL,
          tags,
          largeImageURL,
        })
      );

      if (page === 1) {
        if (!nextImages.length) {
          Notify.failure(`There is no result for ${query}`);
          return;
        }

        this.setState({ images: nextImages, totalImages: totalHits });
      } else {
        this.setState(({ images }) => ({
          images: [...images, ...nextImages],
        }));
      }

      this.checkLastPage({
        page,
        totalImages: totalHits,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  checkLastPage({ page, totalImages }) {
    const { query } = this.state;
    const lastPage = Math.ceil(totalImages / 12);

    if (page === lastPage) {
      Notify.success(`You have got all images for request ${query}`);
      return;
    }
  }

  handleSubmit = value => {
    this.setState({
      images: [],
      query: value,
      page: 1,
    });
  };

  handleClick = e => {
    console.log(e.target.value);
  };

  render() {
    const { images, totalImages, isLoading } = this.state;

    const loadMoreVisible =
      !isLoading && images.length !== 0 && images.length < totalImages;

    return (
      <Layout>
        <AppContainer>
          <GlobalStyle />

          <SearchBar onSubmit={this.handleSubmit} />

          {isLoading && <Loader />}

          {images.length > 0 && images.length < totalImages && (
            <ImageCallery images={images} />
          )}

          {loadMoreVisible && <Button onClick={this.handleClick} />}
        </AppContainer>
      </Layout>
    );
  }
}

export { App };
