import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';
import Button from '../components/Button';
import Form from '../components/Form';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      attributes: [],
      cart: {},
      reviews: [],
    };
  }

  componentDidMount() {
    this.requestProduct();
    const retrieve = JSON.parse(localStorage.getItem('reviews'));
    this.setState({ reviews: retrieve });
  }

  componentWillUnmount() {
    const { reviews } = this.state;
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  submitReview = (email, rating, productEvaluation) => {
    const { reviews } = this.state;
    const review = {
      email,
      rating,
      productEvaluation,
    };
    if (reviews) {
      this.setState((prevState) => ({
        reviews: [...prevState.reviews, review],
      }));
    } else {
      this.setState({ reviews: [review] });
    }
  }

  requestProduct = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const product = await getProductsFromId(id);
    this.setState({
      product,
      attributes: [...product.attributes],
    });
  }

  handleCart = (title, url, value) => {
    const obj = {
      name: title,
      image: url,
      price: value,
    };
    this.setState(() => ({
      cart: obj,
    }));
  }

  render() {
    const { product, attributes, cart, reviews } = this.state;
    const { title, price, thumbnail } = product;

    return (
      <div data-testid="product-detail-name">
        <button
          type="button"
          onClick={ () => this.handleCart(title, thumbnail, price) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <h2>{title}</h2>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <ul>
          {attributes.map((attribute) => {
            const { id, name } = attribute;
            const valueName = attribute.value_name;
            return (
              <li key={ id }>
                <p>
                  {name}
                  {valueName}
                </p>
              </li>
            );
          })}
        </ul>
        <Button cartItems={ cart } />
        <div>
          <Form review={ this.submitReview } />
        </div>
        { reviews && reviews.map((review) => (
          <div key={ review.email }>
            <p>{ review.email }</p>
            <p>{ review.rating }</p>
            <p>{ review.productEvaluation }</p>
          </div>
        ))}
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
