import React from 'react';
import ProductCard from './ProductCard';

const api = require('../services/api');

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoriesResults: [],
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  requestCategories = async () => {
    this.setState({ categories: await api.getCategories() });
  }

  onChangeRequest = async ({ target }) => {
    const response = await api.getProductsFromCategory(target.id);
    this.setState({
      categoriesResults: [...response.results],
    });
  }

  render() {
    const { categories, categoriesResults } = this.state;
    return (
      <div>
        <ul>
          {categories.map((categorie) => (
            <li key={ categorie.id }>
              <label
                htmlFor={ categorie.id }
                data-testid="category"
              >
                <input
                  type="radio"
                  name="categorias"
                  id={ categorie.id }
                  onChange={ this.onChangeRequest }
                />
                {categorie.name}
              </label>
            </li>
          ))}
        </ul>
        { categoriesResults.map(({ title, price, thumbnail, id }) => (<ProductCard
          id={ id }
          key={ id }
          title={ title }
          price={ price }
          thumbnail={ thumbnail }
        />))}
      </div>
    );
  }
}

export default List;
