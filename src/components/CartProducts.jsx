import React from 'react';
import PropTypes from 'prop-types';

class CartProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  addQuantity = () => {
    const { sum, price, availableQuantity } = this.props;
    const { quantity } = this.state;
    if (quantity < availableQuantity) {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }), sum(price));
    }
  }

  subQuantity = () => {
    const { quantity } = this.state;
    const { sub, price } = this.props;
    if (quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }), sub(price));
    }
  }

  render() {
    const { name, image, price } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <img src={ image } alt={ name } />
        <h2 data-testid="shopping-cart-product-name">{ name }</h2>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.subQuantity }
        >
          {' '}
          -
          {' '}
        </button>
        <h2 data-testid="shopping-cart-product-quantity">
          { quantity }
        </h2>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.addQuantity }
        >
          {' '}
          +
          {' '}
        </button>
        <h3>{ price }</h3>
      </div>
    );
  }
}

CartProducts.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sum: PropTypes.func.isRequired,
  sub: PropTypes.func.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default CartProducts;
