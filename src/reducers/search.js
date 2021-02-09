import { 
    SEARCH_BOOKS_FAILURE, 
    SEARCH_BOOKS_REQUEST, 
    SEARCH_BOOKS_SUCCESS, 
} from '../action-types';

const initialState={
    text: '',
    books: [],
    loading: false,
    error: '',
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BOOKS_REQUEST:
            return {
              ...state,
              loading:true,
            };
        case SEARCH_BOOKS_SUCCESS:
            return {
              ...state,
              loading: false,
              books:action.payload,
              error: ''
            }; 
        case SEARCH_BOOKS_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
      default:
        return state;
    }
};

export default searchReducer;
  