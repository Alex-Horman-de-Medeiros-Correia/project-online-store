import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props;

    return (
      <Link data-testid="product-detail-link" to={ `/details/${id}` } >
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
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductCard;
