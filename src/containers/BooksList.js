import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import { getFilteredBooks } from '../helpers/index';
import './BooksList.css';

const BooksList = ({
  books,
  filter,
  removeBook,
  changeFilter,
}) => {
  const filteredBooks = getFilteredBooks(books, filter);

  return (
    <>
      <div>
        <CategoryFilter
          handleFilterChange={changeFilter}
        />
        <div className="filter-container">
          <table>
            <tbody>
              {
                filteredBooks.map(book => (
                  <Book
                    key={book.bookID}
                    bookID={book.bookID}
                    title={book.title}
                    category={book.category}
                    handleRemoveBook={removeBook}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapDispatchToProps = { removeBook, changeFilter };

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
