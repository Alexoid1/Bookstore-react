import axios from 'axios';
import {
  FETCH_BOOKS_FAILURE, 
  FETCH_BOOKS_REQUEST, 
  FETCH_BOOKS_SUCCESS, 
  CHANGE_FILTER, 
  CREATE_BOOK_FAILURE, 
  CREATE_BOOK_REQUEST, 
  CREATE_BOOK_SUCCESS
} from '../action-types';



export const fetchBooksRequest = ()  => {
  return {
    type: FETCH_BOOKS_REQUEST,
  }  
};

export const fetchBooksSuccess = (books)  => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload:books
  }  
};

export const createBookFailure = (error)  => {
  return {
    type:   CREATE_BOOK_FAILURE,
    payload: error
  }  
};

export const createBookRequest = ()  => {
  return {
    type: CREATE_BOOK_REQUEST,
  }  
};

export const createBookSuccess = (books)  => {
  return {
    type: CREATE_BOOK_SUCCESS,
    payload:books
  }  
};

export const fetchBooksFailure = (error)  => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  }  
};

export const fetchBooks = ()=> {
  return function(dispatch){
    dispatch(fetchBooksRequest)
    axios.get('https://bookstore-apii.herokuapp.com/api/v1/books')
    .then(response => {
      const books=response.data.data
      console.log(books)
      dispatch(fetchBooksSuccess(books))
    })
    .catch(error => {
      dispatch(fetchBooksFailure(error.message))
    })
  }
}

// export const removeBook = book =>  {
//   return {
//   type: REMOVE_BOOK,
//   book,
// }};

export const changeFilter = value => {
  return {
  type: CHANGE_FILTER,
  value,
}};
