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
  SEARCH_BOOKS_FAILURE,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
} from '../action-types';

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = error => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const createBookFailure = error => ({
  type: CREATE_BOOK_FAILURE,
  payload: error,
});

export const createBookRequest = () => ({
  type: CREATE_BOOK_REQUEST,
});

export const createBookSuccess = book => ({
  type: CREATE_BOOK_SUCCESS,
  payload: book,
});

export const deleteBookFailure = error => ({
  type: DELETE_BOOK_FAILURE,
  payload: error,
});

export const deleteBookRequest = () => ({
  type: DELETE_BOOK_REQUEST,
});

export const deleteBookSuccess = book => ({
  type: DELETE_BOOK_SUCCESS,
  payload: book,
});
export const updateBookFailure = error => ({
  type: UPDATE_BOOK_FAILURE,
  payload: error,
});

export const updateBookRequest = () => ({
  type: UPDATE_BOOK_REQUEST,
});

export const updateBookSuccess = book => ({
  type: UPDATE_BOOK_SUCCESS,
  payload: book,
});

export const searchBooksRequest = () => ({
  type: SEARCH_BOOKS_REQUEST,
});

export const searchBooksSuccess = books => ({
  type: SEARCH_BOOKS_SUCCESS,
  payload: books,

});

export const searchBooksFailure = error => ({
  type: SEARCH_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooks = () => dispatch => {
  dispatch(fetchBooksRequest);
  axios.get('https://bookstore-apii.herokuapp.com/api/v1/books')
    .then(response => {
      const books = response.data.data;

      dispatch(fetchBooksSuccess(books));
    })
    .catch(error => {
      dispatch(fetchBooksFailure(error.message));
    });
};

export const createBook = book => dispatch => {
  dispatch(createBookRequest);
  axios.post('https://bookstore-apii.herokuapp.com/api/v1/books',
    {
      title: book.title,
      author: book.author,
      category: book.category,
      percentage: 0,
      calification: 0,
    })
    .then(response => {
      createBookSuccess(response.data.data);
      dispatch(fetchBooks());
    })
    .catch(error => {
      dispatch(createBookFailure(error.message));
    });
};

export const deleteBook = id => dispatch => {
  dispatch(deleteBookRequest);
  axios.delete(`https://bookstore-apii.herokuapp.com/api/v1/books/${id}`)
    .then(response => {
      const book = response.data.data;
      console.log(book);
      dispatch(fetchBooks());
    })
    .catch(error => {
      dispatch(deleteBookFailure(error.message));
    });
};

export const updateBook = (id, percentage, calification) => function (dispatch) {
  dispatch(updateBookRequest);
  axios.put(`https://bookstore-apii.herokuapp.com/api/v1/books/${id}`,
    {
      percentage,
      calification,
    })
    .then(response => {
      const book = response.data.data;
      console.log(book);
      dispatch(fetchBooks());
    })
    .catch(error => {
      dispatch(updateBookFailure(error.message));
    });
};

export const searchBooks = text => function (dispatch) {
  dispatch(searchBooksRequest);
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
    .then(response => {
      const books = response.data.items;
      console.log(books);

      dispatch(searchBooksSuccess(books));
    })
    .catch(error => {
      dispatch(searchBooksFailure(error.message));
    });
};

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  value,
});
