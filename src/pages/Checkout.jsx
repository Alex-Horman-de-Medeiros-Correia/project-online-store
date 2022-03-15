import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    const data = JSON.parse(sessionStorage.getItem('cart'));
    const cart = data.filter((item) => Object.keys(item).length > 0);
    this.setState({
      cart,
    });
  }

  render() {
    const { cart } = this.state;
    const { location: { state } } = this.props;
    return (
      <div>
        <div>
          {cart.map((item) => {
            const { name, price, image } = item;
            return (
              <div key={ image }>
                <img src={ image } alt={ name } />
                <p>{ name }</p>
                <p>{ price }</p>
              </div>
            );
          })}
          <p>{ state }</p>
        </div>
        <form>
          <label htmlFor="fullname">
            Nome completo
            <input
              type="text"
              name="fullname"
              id="fullname"
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="cpf">
            CPF
            <input
              type="text"
              name="cpf"
              id="cpf"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="phone">
            Telefone
            <input
              type="tel"
              name="phone"
              id="phone"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="cep">
            CEP
            <input
              type="text"
              name="cep"
              id="cep"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="address">
            Endereço
            <input
              type="text"
              name="address"
              id="address"
              data-testid="checkout-address"
            />
          </label>
          <input type="button" value="Finalizar Compra" />
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.number.isRequired,
  }).isRequired,
};

export default Checkout;
