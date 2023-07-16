import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { SearchBar } from './Searchbar';
import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    arr: [],
  };

  handleSubmit = () => {
    console.log('SearchBar');
  };
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <SearchBar onSubmit={this.handleSubmit} />
        <div>Hello</div>
      </AppContainer>
    );
  }
}

export { App };
