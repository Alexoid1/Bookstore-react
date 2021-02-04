import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import Star from './Star';

const Book = ({
  bookID,
  title,
  category,
  author,
  percentage,
  calification
  // handleRemoveBook,
}) => (
  <div className="book-container">
    <div className="book-details">
      <div>
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
      </div>
      <div className="actions">
        <button
          type="button"
        >
          comments
        </button>
        <button
          type="button"
          // onClick={() => {
          //   const book = {
          //     bookID,
          //     title,
          //     author,
          //     category,
          //   };

          //   handleRemoveBook(book);
          // }}
        >
          Remove
        </button>
        <button
          type="button"
        >
          Edits
        </button>
      </div>
    </div>
    <div className="complete-container">
      <div className="complete">
        <div className="circle" />
        <div className="complete-value">
          <span
            className="percent"
          >
            {`${percentage}%`}
          </span>
          <span className="faded-text">Completed</span>
          <Star calification={calification}/>
        </div>
      </div>
      <div className="update">
        <span className="title">CURRENT CHAPTER</span>
        <span className="chapter">{`Chapter ${Math.floor(Math.random() * 34 + 1)}`}</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  bookID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  // handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
