import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../helpers/index';
import './Category.css';

const CategoryFilter = ({ handleFilterChange }) => {
  const [text, setText] = useState('All');

  const handleTextChange = e => {
    const { target: { value } } = e;

    handleFilterChange(value);

    setText(value);
  };

  return (
    <div className="filter">
      <select
        value={text}
        onChange={handleTextChange}
        className="selectFilter"
      >
        <option value="All">All</option>
        {
          bookCategories.map(book => (
            <option
              key={book}
              value={book}
            >
              {book}
            </option>
          ))
        }
      </select>

    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
