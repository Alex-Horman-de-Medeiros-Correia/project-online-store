import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';
import Button from '../components/Button';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      attributes: [],
    };
  }

  componentDidMount() {
    this.requestProduct();
  }

  requestProduct = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const product = await getProductsFromId(id);
    this.setState({
      product,
      attributes: [...product.attributes],
    });
  }

  render() {
    const { product, attributes } = this.state;
    const { title, price, thumbnail } = product;

    return (
      <div data-testid="product-detail-name">
        <h2>{ title }</h2>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <ul>
          { attributes.map((attribute) => {
            const { id, name } = attribute;
            const valueName = attribute.value_name;
            return (
              <li key={ id }>
                <p>
                  { name }
                  { valueName }
                </p>
              </li>
            );
          })}
        </ul>
        <Button />
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Details;
