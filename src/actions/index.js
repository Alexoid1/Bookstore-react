import axios from 'axios';
import {
  FETCH_BOOKS_FAILURE, 
  FETCH_BOOKS_REQUEST, 
  FETCH_BOOKS_SUCCESS, 
  CHANGE_FILTER, 
  CREATE_BOOK_FAILURE, 
  CREATE_BOOK_REQUEST, 
  CREATE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE, 
  DELETE_BOOK_REQUEST, 
  DELETE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE, 
  UPDATE_BOOK_REQUEST, 
  UPDATE_BOOK_SUCCESS,
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

export const fetchBooksFailure = (error)  => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
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

export const createBookSuccess = (book)  => {
  return {
    type: CREATE_BOOK_SUCCESS,
    payload:book
  }  
};

export const deleteBookFailure = (error)  => {
  return {
    type:   DELETE_BOOK_FAILURE,
    payload: error
  }  
};

export const deleteBookRequest = ()  => {
  return {
    type: DELETE_BOOK_REQUEST,
  }  
};

export const deleteBookSuccess = (book)  => {
  return {
    type: DELETE_BOOK_SUCCESS,
    payload:book
  }  
};
export const updateBookFailure = (error)  => {
  return {
    type:   UPDATE_BOOK_FAILURE,
    payload: error
  }  
};

export const updateBookRequest = ()  => {
  return {
    type: UPDATE_BOOK_REQUEST,
  }  
};

export const updateBookSuccess = (book)  => {
  return {
    type: UPDATE_BOOK_SUCCESS,
    payload:book
  }  
};


export const fetchBooks = ()=> {
  return function(dispatch){
    dispatch(fetchBooksRequest)
    axios.get('https://bookstore-apii.herokuapp.com/api/v1/books')
    .then(response => {
      const books=response.data.data
      
      dispatch(fetchBooksSuccess(books))
    })
    .catch(error => {
      dispatch(fetchBooksFailure(error.message))
    })
  }
}

export const createBook = (book)=> {
  return function(dispatch){
    dispatch(createBookRequest)
    axios.post(`https://bookstore-apii.herokuapp.com/api/v1/books`, 
    {
      title: book.title,
      author: book.author,
      category: book.category,
      percentage: 0,
      calification: 0,
    })
    .then(response => {
      const book=response.data.data
      console.log(book)
      dispatch(fetchBooks())
    })
    .catch(error => {
      dispatch(createBookFailure(error.message))
    })
  }
}

export const deleteBook = (id)=> {
  return function(dispatch){
    dispatch(deleteBookRequest)
    axios.delete(`https://bookstore-apii.herokuapp.com/api/v1/books/${id}`)
    .then(response => {
      const book=response.data.data
      console.log(book)
      dispatch(fetchBooks())
    })
    .catch(error => {
      dispatch(deleteBookFailure(error.message))
    })
  }
}

export const updateBook = (id)=> {
  return function(dispatch){
    dispatch(updateBookRequest)
    axios.put(`https://bookstore-apii.herokuapp.com/api/v1/books/${id}`)
    .then(response => {
      const book=response.data.data
      console.log(book)
      dispatch(fetchBooks())
    })
    .catch(error => {
      dispatch(deleteBookFailure(error.message))
    })
  }
}


export const changeFilter = value => {
  return {
  type: CHANGE_FILTER,
  value: value,
  }
};
