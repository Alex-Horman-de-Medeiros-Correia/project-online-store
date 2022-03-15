import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state } } = this.props;
    const cartitems = state.filter((item) => Object.keys(item).length !== 0);
    return (
      <div>
        <h2 data-testid="shopping-cart-product-quantity">
          Produtos no carrinho:
          {cartitems.length}
        </h2>
        {cartitems.length > 0 ? (
          cartitems.map((each) => (
            <div key={ each.name }>
              <img src={ each.image } alt={ each.name } />
              <h2 data-testid="shopping-cart-product-name">{each.name}</h2>
              <h3>{each.price}</h3>
            </div>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ShoppingCart;
