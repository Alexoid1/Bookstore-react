import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList({ books, removeBook }) {
  return (
    <table>
      <tr>
        <th>BookID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove Book</th>
      </tr>
      {
      books.map(book => (
        <Book
          key={book.bookID}
          bookID={book.bookID}
          title={book.title}
          category={book.category}
          handleRemoveBook={removeBook}
        />
      ))
    }
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapDispatchToProps = { removeBook };

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
