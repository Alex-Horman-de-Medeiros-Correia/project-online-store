import React from 'react';
import { getProductsFromId } from '../services/api';
import Button from '../components/Button';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      attributes: [],
    }
  }

  componentDidMount() {
    this.requestProduct();
  }

  requestProduct = async () => {
    const id = this.props.match.params.id;
    const product = await getProductsFromId(id);
    this.setState({
      product,
      attributes: [...product.attributes],
    })
  }

  render() {
    const { title, price, thumbnail } = this.state.product;
    const { attributes } = this.state;

    return (
      <div data-testid="product-detail-name">
        <h2>{ title }</h2>
        <p>{ price }</p>
        <img src={thumbnail} alt={title} />
        <ul>
          { attributes.map(({ id, name, value_name }) => 
            <li key={id}>
              <p>{ name } { value_name }</p>
            </li>
           ) }
        </ul>
        <Button />
      </div>
    );
  }
}

export default Details;
