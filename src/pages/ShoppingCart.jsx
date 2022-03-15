import React from 'react';
import PropTypes from 'prop-types';
import CartProducts from '../components/CartProducts';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalValue: 0,
    };
  }

  componentDidMount() {
    this.getTotalValue();
  }

  getTotalValue = () => {
    const { location: { state } } = this.props;
    const filteredState = state.filter((item) => Object.keys(item).length !== 0);
    const total = filteredState.reduce((acc, product) => {
      const soma = acc + product.price;
      return soma;
    }, 0);
    this.setState({
      totalValue: total,
    });
  }

  subTotal = (price) => {
    this.setState((prevState) => ({
      totalValue: prevState.totalValue - price,
    }));
  }

  sumTotal = (price) => {
    this.setState((prevState) => ({
      totalValue: prevState.totalValue + price,
    }));
  }

  render() {
    const { totalValue } = this.state;
    const sum = this.sumTotal;
    const sub = this.subTotal;
    const { location: { state } } = this.props;
    const cartitems = state.filter((item) => Object.keys(item).length !== 0);
    return (
      <div>
        <h2>Produtos no Carrinho:</h2>
        <h2>
          {cartitems.length}
        </h2>
        {cartitems.length > 0 ? (
          cartitems.map((each) => (
            <CartProducts
              key={ each.name }
              name={ each.name }
              image={ each.image }
              price={ each.price }
              sum={ sum }
              sub={ sub }
            />
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
        <h2>
          { totalValue }
        </h2>
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
