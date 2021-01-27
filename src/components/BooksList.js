import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

function BooksList({ books }) {
  return (
    <table>
      <tr>
        <th>BookID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
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
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps)(BooksList);
