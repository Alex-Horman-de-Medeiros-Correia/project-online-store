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
    this.handleCart();
  }

  componentWillUnmount() {
    const { cart } = this.state;
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  handleCart = () => {
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

  render() {
    const { cart } = this.state;
    const cartFiltered = cart ? cart.filter((item) => Object.keys(item).length !== 0) : 0;
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ {
          pathname: '/shopping-cart',
          state: cart,
        } }
      >
        Carrinho
        <p data-testid="shopping-cart-size">{ cart && cartFiltered.length }</p>
      </Link>
    );
  }
}

Button.propTypes = {
  cartItems: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Button.defaultProps = {
  cartItems: PropTypes.shape({
    name: undefined,
  }),
};

export default Button;
