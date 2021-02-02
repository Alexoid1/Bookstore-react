import { CREATE_BOOK, REMOVE_BOOK, FETCH_BOOKS } from '../action-types';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];
    case FETCH_BOOKS:
      return {
        ...state,
        books:action.payload,
      };  
    case REMOVE_BOOK:
      return state.filter(book => book.bookID !== action.book.bookID);
    default:
      return state;
  }
};

export default booksReducer;
