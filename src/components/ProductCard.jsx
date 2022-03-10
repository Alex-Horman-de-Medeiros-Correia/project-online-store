import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;

    return (
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
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductCard;