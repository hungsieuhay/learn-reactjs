import PropTypes from 'prop-types';
import React from 'react';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return <div>{product.name}</div>;
}

export default Product;
