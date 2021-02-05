import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../helpers/index';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import './Category.css';

const CategoryFilter = ({ changeFilter }) => {
  const [text, setText] = useState('All');

  const handleTextChange = e => {
    const { target: { value } } = e;
    setText(value);
    changeFilter(value)
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
  changeFilter: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch =>
    {
      return{changeFilter:(value)=> dispatch(changeFilter(value)) }
    } ;

const mapStateToProps = state=> ({
  filter:state.filter
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
