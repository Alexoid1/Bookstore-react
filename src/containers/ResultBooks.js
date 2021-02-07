import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from '../actions/index';
import Spinner from '../components/Spinner';
import CardBook from '../components/CardBook'

function ResultBooks(books) {
   
  useEffect(() => {
    searchBooks()
  },[])
  return (books.loading  ? (
    <>
     <Spinner/>
    </>
  ) : books.error ?(
    <h2 className="error">{books.error}</h2>
  ) : (
    <>
      
      <div className="books-container filter-container">
          {
            books.books.map(book => {
              <CardBook title={book.volumeInfo.title} />
             
            })
          }
      </div>
    </>  
  ))
};
    
const mapStateToProps = state=> ({
  books:state.search,
});

const mapDispatchToProps = dispatch =>
    {
      return{searchBooks:(text)=> dispatch(searchBooks(text))}
    } ;

export default connect(mapStateToProps, mapDispatchToProps)(ResultBooks);