import React, { useState } from 'react';
import PropTypes from 'prop-types';

SearchTerm.propTypes = {
  onSubmit: PropTypes.func,
};

function SearchTerm({ onSubmit = null }) {
  const [searchText, setSearchText] = useState('');
  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!onSubmit) return;
    const formValues = {
      title: e.target.value,
    };
    onSubmit(formValues);
  };
  return (
    <form>
      <input type="text" value={searchText} onChange={handleSearchTerm} />
      <button type="submit" onClick={(e) => handleSearchTerm(e)}>
        Search
      </button>
    </form>
  );
}

export default SearchTerm;
