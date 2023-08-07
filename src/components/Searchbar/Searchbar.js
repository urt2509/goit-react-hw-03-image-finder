import React, { Component } from 'react';
import { Notify } from 'notiflix';
import * as S from './Searchbar.styled';

import { ImSearch } from 'react-icons/im';

class SearchBar extends Component {
  state = {
    searchImage: '',
  };

  handleSubmit = e => {
    const { searchImage } = this.state;

    e.preventDefault();

    if (searchImage.trim() === '') {
      return Notify.failure('Please enter text for search images', {
        timeout: 1000,
      });
    }

    this.props.onSubmit(searchImage);
    this.setState({ searchImage: '' });
  };

  handleChange = e => {
    this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { searchImage } = this.state;

    return (
      <S.Bar>
        <S.Form onSubmit={this.handleSubmit}>
          <S.Button type="submit">
            <ImSearch />
          </S.Button>

          <S.Input
            type="text"
            value={searchImage}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          ></S.Input>
        </S.Form>
      </S.Bar>
    );
  }
}

export { SearchBar };
