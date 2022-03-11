import React from 'react';

const api = require('../services/api');

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  requestCategories = async () => {
    this.setState({ categories: await api.getCategories() });
  }

  render() {
    const { categories } = this.state;
    return (
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
              />
              {categorie.name}
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
