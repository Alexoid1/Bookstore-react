import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../helpers/index';

const bookCategories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
    'All'
];

const CategoryFilter = ({ handleFilterChange }) => {
    const [category, setCategory] = useState('All');
}

CategoryFilter.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
};
  
export default CategoryFilter;