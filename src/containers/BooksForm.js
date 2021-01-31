import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import { bookCategories } from '../helpers/index';
import './BooksForm.css';

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = event => {
    setTitle(() => event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(() => event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (title && category) {
      createBook({
        bookID: Math.floor(Math.random() * 1000),
        title,
        category,
      });

      setTitle('');
      setCategory('');
    }
  };

  return (
    <div className="filter">
      <form>
        <div className="inputTitle">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="inputCategory">
          <select
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">
              none
            </option>
            {
              bookCategories.map(category => (
                <option key={`key-${category}`} value={category}>
                  {category}
                </option>
              ))
            }
          </select>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="addBook"
        >
          Add Book
        </button>
      </form>
    </div>

  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = { createBook };

export default connect(null, mapDispatchToProps)(BooksForm);
