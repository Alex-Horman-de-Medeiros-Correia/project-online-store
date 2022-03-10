import React from 'react'; // Desenvolvido em pair programming por Alex Horman e Kaique Coelho
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </main>
    );
  }
}

export default Content;
