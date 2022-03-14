import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ {
          pathname: '/shopping-cart',
          state: cartItems,
        } }
      >
        Carrinho
      </Link>
    );
  }
}

Button.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
};

Button.defaultProps = {
  cartItems: undefined,
};

export default Button;
