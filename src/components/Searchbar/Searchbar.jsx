import React from 'react';
import { SearchBarStyled } from './Searchbar.styled';

const SearchBar = ({ onSubmit }) => (
  <SearchBarStyled class="searchbar">
    <form class="form">
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>

      <input
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </SearchBarStyled>
);

export { SearchBar };
