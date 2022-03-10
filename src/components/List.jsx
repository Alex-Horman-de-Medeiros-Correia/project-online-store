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
      <>
        { categories.map((categorie) => (
          <ul key={ categorie.id }>
            <li>
              <input
                type="radio"
                name={ categorie.id }
                id={ categorie.id }
              />
              <label
                htmlFor={ categorie.id }
                data-testid="category"
              >
                { categorie.name }
              </label>
            </li>
          </ul>
        )) }
      </>
    );
  }
}

export default List;
