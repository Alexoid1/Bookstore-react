import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { fetchBooks } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import { getFilteredBooks } from '../helpers/index';
import './BooksList.css';

const BooksList = ({
  books,
  filter,
  fetchBooks,
}) => {
   
  console.log(filter)
  
  
  useEffect(() => {
    fetchBooks()
  },[])
  return books.loading ? (
      <h2>loading</h2>
      
      
    
  ) : books.error ?(
    <h2>error</h2>
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
                // handleRemoveBook={removeBook}
              />
            ))
          }
        </div>
      </>  
  )
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  // removeBook: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [],
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
