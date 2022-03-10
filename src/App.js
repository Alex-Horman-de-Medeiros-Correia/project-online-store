import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Content />
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}

export default App;
