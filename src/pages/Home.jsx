import React from 'react';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Button from '../components/Button';
import List from '../components/List';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      searchResults: [],
      resultsLength: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleButton = async () => {
    const { searchText } = this.state;

    const products = await getProductsFromCategoryAndQuery(searchText);
    this.setState({
      searchResults: [...products.results],
      resultsLength: products.results.length,
    });
  }

  render() {
    const { searchResults, resultsLength } = this.state;

    return (
      <>
        <header>
          <input
            data-testid="query-input"
            type="text"
            name="searchText"
            onChange={ this.handleChange }
          />
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleButton }
          >
            Pesquisar
          </button>
          { resultsLength > 0 ? (
            searchResults.map(({ title, price, thumbnail, id }) => (<ProductCard
              key={ id }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
            />))
          ) : <h1>Nenhum produto foi encontrado</h1>}
          <Button />
        </header>
        <List />
      </>
    );
  }
}

export default Home;
