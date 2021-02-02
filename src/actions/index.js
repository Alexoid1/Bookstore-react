import { CREATE_BOOK, REMOVE_BOOK, FETCH_BOOKS, CHANGE_FILTER } from '../action-types';
import axios from 'axios';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const fetchBooks=books=>dispatch=>{

  axios.get(`https://bookstore-reactt.herokuapp.com/api/v1/books`).then(response=>dispatch({
      type:FETCH_BOOKS,
      payload:response.data   //la profundidad de detalle en el API  se lo especifica en la ccion por que en los resultados solo se puede especificar dos
  }))
  .catch(err=> console.log(err))

}

export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  value,
});
