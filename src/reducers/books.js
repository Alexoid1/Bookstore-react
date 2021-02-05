import { 
  FETCH_BOOKS_FAILURE, 
  FETCH_BOOKS_REQUEST, 
  FETCH_BOOKS_SUCCESS, 
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

const initialState={
  book: [],
  books: [],
  loading: false,
  error: ''
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case CREATE_BOOK_REQUEST:
      return {
          ...state,
          loading:true,
        };
    case CREATE_BOOK_SUCCESS:
        return {
          ...state,
          loading: false,
          books:action.payload,
          error: ''
        }; 
    case CREATE_BOOK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case DELETE_BOOK_REQUEST:
        return {
          ...state,
          loading:true,
        };
    case DELETE_BOOK_SUCCESS:
        return {
          ...state,
          loading: false,
          books:action.payload,
          error: ''
        }; 
    case DELETE_BOOK_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case UPDATE_BOOK_REQUEST:
        return {
          ...state,
          loading:true,
        };
    case UPDATE_BOOK_SUCCESS:
        return {
          ...state,
          loading: false,
          books:action.payload,
          error: ''
        }; 
    case UPDATE_BOOK_FAILURE:
        return {
          ...state,
          loading: false,
            error: action.payload,
        };     
       
    
    default:
      return state;
  }
};

export default booksReducer;
