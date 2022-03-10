import React from 'react';
import List from '../components/List';

class Home extends React.Component {
  render() {
    return (
      <>
        <header>
          <input type="text" />
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </header>
        <List />
      </>
    );
  }
}

export default Home;
