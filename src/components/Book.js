import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  bookID,
  title,
  category,
  handleRemoveBook,
}) => (
  <tr>
    <td>{bookID}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button
        onClick={() => {
          const book = {
            bookID,
            title,
            category,
          };

          handleRemoveBook(book);
        }}
        type="button"
      >
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  bookID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
