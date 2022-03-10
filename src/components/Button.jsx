import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
    );
  }
}

export default Button;
