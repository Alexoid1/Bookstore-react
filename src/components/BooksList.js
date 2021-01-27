import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


function BooksList({books}) {
  return (
    <div>
      {
        books.map(book => (
          <Book
            key={book.bookID}
            bookID={book.bookID}
            title={book.title}
            category={book.category}
          />
        ))
      }
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: [],
};
export default BooksList;