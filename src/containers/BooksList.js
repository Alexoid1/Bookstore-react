import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import Spinner from '../components/Spinner';
import { fetchBooks } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import { getFilteredBooks } from '../helpers/index';
import './BooksList.css';

const BooksList = ({
  books,
  filter,
  fetchBooks,
}) => {
   
  useEffect(() => {
    fetchBooks()
  },[])
  return (books.loading  ? (
    <>
     <Spinner/>
    </>
  ) : books.error ?(
    <h2 className="error">{books.error}</h2>
  ) : (
    <>
      <div className="filter-container">
      <CategoryFilter
      />
      </div>
      <div className="books-container filter-container">
          {
            getFilteredBooks(books.books, filter).map(book => (
              
              <Book
                key={book.id}
                bookID={book.id}
                title={book.title}
                category={book.category}
                percentage={book.percentage}
                author={book.author}
                calification={book.calification}
              />
            ))
          }
        </div>
      </>  
  ))
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: {},
};

const mapDispatchToProps = dispatch =>
    {
      return{fetchBooks:()=> dispatch(fetchBooks())}
    } ;

const mapStateToProps = state=> ({
  books:state.books,
  filter:state.filter
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
