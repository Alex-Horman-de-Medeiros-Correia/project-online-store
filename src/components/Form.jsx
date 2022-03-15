import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      productEvaluation: '',
      rating: '',
    };
  }

  cleanInputs = () => {
    this.setState({
      email: '',
      productEvaluation: '',
      rating: '',
    });
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, productEvaluation, rating } = this.state;
    const { review } = this.props;

    return (
      <form action="">
        <input
          type="email"
          name="email"
          data-testid="product-detail-email"
          value={ email }
          onChange={ this.handleInput }
        />
        <label htmlFor="radio1">
          <input
            type="radio"
            id="radio1"
            name="rating"
            data-testid="1-rating"
            value="1"
            onClick={ this.handleInput }
          />
          1
        </label>
        <label htmlFor="radio2">
          <input
            type="radio"
            id="radio2"
            name="rating"
            data-testid="2-rating"
            value="2"
            onClick={ this.handleInput }
          />
          2
        </label>
        <label htmlFor="radio3">
          <input
            type="radio"
            id="radio3"
            name="rating"
            data-testid="3-rating"
            value="3"
            onClick={ this.handleInput }
          />
          3
        </label>
        <label htmlFor="radio4">
          <input
            type="radio"
            id="radio4"
            name="rating"
            data-testid="4-rating"
            value="4"
            onClick={ this.handleInput }
          />
          4
        </label>
        <label htmlFor="radio5">
          <input
            type="radio"
            id="radio5"
            name="rating"
            data-testid="5-rating"
            value="5"
            onClick={ this.handleInput }
          />
          5
        </label>
        <textarea
          name="productEvaluation"
          data-testid="product-detail-evaluation"
          value={ productEvaluation }
          onChange={ this.handleInput }
        />
        <button
          type="button"
          data-testid="submit-review-btn"
          onClick={ () => {
            review(email, rating, productEvaluation);
            this.cleanInputs();
          } }
        >
          Enviar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  review: PropTypes.func.isRequired,
};

export default Form;
