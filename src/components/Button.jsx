import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    const prevCart = JSON.parse(sessionStorage.getItem('cart'));
    this.setState({
      cart: prevCart,
    });
  }

  componentDidUpdate() {
    const { cart } = this.state;
    const { cartItems } = this.props;
    if (cart === null) {
      this.setState(() => ({
        cart: [cartItems],
      }));
    } else if (cart[cart.length - 1] !== cartItems) {
      this.setState((prevStates) => ({
        cart: [...prevStates.cart, cartItems],
      }));
    }
  }

  componentWillUnmount() {
    const { cart } = this.state;
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const { cart } = this.state;
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ {
          pathname: '/shopping-cart',
          state: cart,
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
