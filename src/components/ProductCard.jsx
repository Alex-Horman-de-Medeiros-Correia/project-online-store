import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  teste = () => console.log('teste');

  render() {
    const { title, price, thumbnail, id, freeShipping } = this.props;
    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/details/${id}`,
        } }
      >
        <div data-testid="product">
          <h2>
            {' '}
            { title }
            {' '}
          </h2>
          <p>
            {' '}
            { price }
            {' '}
          </p>
          <img src={ thumbnail } alt={ title } />
          { freeShipping && <p data-testid="free-shipping">Frete grátis</p> }
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default ProductCard;
