import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FiltersByCategory from './Filters/FiltersByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
  const handleCategoryChange = (newCategory) => {
    if (!onChange) return;
    const newFilters = {
      'category.id': newCategory.id,
      'category.name': newCategory.name,
    };
    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FiltersByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilter;
