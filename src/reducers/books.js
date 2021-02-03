import { CREATE_BOOK, REMOVE_BOOK, FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from '../action-types';

const initialState={
  book: [],
  books: [],
  loading: false,
  error: ''
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CREATE_BOOK:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading:true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books:action.payload,
        error: ''
      }; 
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };   
    // case REMOVE_BOOK:
    //   return {
    //     ...state,
    //     books:state.books.filter(book => book.bookID !== action.book.bookID)
    // }
    default:
      return state;
  }
};

export default booksReducer;
