import { combineReducers, createStore } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware=[ReduxThunk];
const initialState={};

const store = createStore(
  combineReducers({
    books: booksReducer,
    filter: filterReducer,
  }),initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
