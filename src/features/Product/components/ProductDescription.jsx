import { Paper } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  return (
    <Paper elevator={3} style={{ padding: '15px' }}>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </Paper>
  );
}

export default ProductDescription;
