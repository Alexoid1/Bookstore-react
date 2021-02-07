import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from '../actions/index';
import PropTypes from 'prop-types';
import './SearchBookForm.css';

const SearchBookForm = ({searchBooks}) => {
  const [text, setText] = useState('');

  const handleTextChange = event => {
    setText(() => event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
      searchBooks(text)
      
  };

  return (
    <div>
      <form className="formSe">
        <div className="inputSearch">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Book Name"
          />
        </div>
    
      <button
        type="button"
        onClick={handleSubmit}
        className="searchBook"
      >
        Search Book
      </button>
    </form>
  </div>
  );
};

SearchBookForm.propTypes = {
  searchBooks: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
    {
      return{searchBooks:(text)=> dispatch(searchBooks(text))}
    } ;

export default connect(null, mapDispatchToProps)(SearchBookForm);