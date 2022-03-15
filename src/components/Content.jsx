import React from 'react'; // Desenvolvido em pair programming por Alex Horman e Kaique Coelho
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import Details from '../pages/Details';
import Checkout from '../pages/Checkout';

class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/details/:id" component={ Details } />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </main>
    );
  }
}

export default Content;
