import React from 'react';
import PropTypes from 'prop-types';

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
    const { idFunction } = this.props;

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
                  onChange={ () => idFunction(categorie.id) }
                />
                {categorie.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  idFunction: PropTypes.func.isRequired,
};

export default List;
