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
      cart: [],
      categoryId: '',
    };
  }

  getCategoryId = async (id) => {
    const { searchText } = this.state;
    const textAndCategory = await getProductsFromCategoryAndQuery(searchText, id);
    this.setState({
      searchResults: textAndCategory.results,
      categoryId: id,
      resultsLength: textAndCategory.results.length,
    });
  }

  handleCart = (title, url, value) => {
    const obj = {
      name: title,
      image: url,
      price: value,
    };
    this.setState((prevState) => ({
      cart: [...prevState.cart, obj],
    }));
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleButton = async () => {
    const { searchText, categoryId } = this.state;
    const products = await getProductsFromCategoryAndQuery(searchText, categoryId);
    this.setState({
      searchResults: [...products.results],
      resultsLength: products.results.length,
    });
  }

  render() {
    const { searchResults, resultsLength, cart } = this.state;
    const cartButton = this.handleCart;

    return (
      <>
        <header>
          <input
            data-testid="query-input"
            type="text"
            name="searchText"
            onChange={ this.handleChange }
          />
          <Button cartItems={ cart } />
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
            searchResults.map(({ title, price, thumbnail, id }) => (
              <div key={ id }>
                <ProductCard
                  title={ title }
                  price={ price }
                  thumbnail={ thumbnail }
                  id={ id }
                />
                <button
                  type="button"
                  onClick={ () => cartButton(title, thumbnail, price) }
                  data-testid="product-add-to-cart"
                >
                  Adicionar ao Carrinho
                </button>
              </div>))
          ) : <h1>Nenhum produto foi encontrado</h1>}
        </header>
        <List idFunction={ this.getCategoryId } />
      </>
    );
  }
}

export default Home;
