import { CREATE_BOOK, REMOVE_BOOK } from '../action-types';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;
