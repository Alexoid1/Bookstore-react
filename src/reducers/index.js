import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from './books';
import filterReducer from './filter';
import searchReducer from './search';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  search: searchReducer,
});
const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
