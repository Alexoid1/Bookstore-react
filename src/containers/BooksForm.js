import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createBook } from '../actions/index';
import { bookCategories } from '../helpers/index';
import './BooksForm.css';

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = event => {
    setTitle(() => event.target.value);
  };

  const handleAuthorChange = event => {
    setAuthor(() => event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(() => event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (title && category && author) {
      createBook({
        bookID: Math.floor(Math.random() * 1000),
        title,
        author,
        category,
      });

      setTitle('');
      setCategory('');
      setAuthor('');
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
            placeholder="Title"
          />
        </div>
        <div className="inputAuthor">
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
            placeholder="Author Name"
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

// BooksForm.propTypes = {
//   createBook: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = { createBook };

// export default connect(null, mapDispatchToProps)(BooksForm);
export default BooksForm