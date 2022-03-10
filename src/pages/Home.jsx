import React from 'react';
import Button from '../components/Button';

class Home extends React.Component {
  render() {
    return (
      <header>
        <input type="text" />
        <Button />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </header>
    );
  }
}

export default Home;
