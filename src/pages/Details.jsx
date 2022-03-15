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
      cart: {},
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

  handleCart = (title, url, value) => {
    const obj = {
      name: title,
      image: url,
      price: value,
    };
    this.setState(() => ({
      cart: obj,
    }));
  }

  render() {
    const { product, attributes, cart } = this.state;
    const { title, price, thumbnail } = product;

    return (
      <div data-testid="product-detail-name">
        <button
          type="button"
          onClick={ () => this.handleCart(title, thumbnail, price) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <h2>{title}</h2>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <ul>
          {attributes.map((attribute) => {
            const { id, name } = attribute;
            const valueName = attribute.value_name;
            return (
              <li key={ id }>
                <p>
                  {name}
                  {valueName}
                </p>
              </li>
            );
          })}
        </ul>
        <Button cartItems={ cart } />
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
