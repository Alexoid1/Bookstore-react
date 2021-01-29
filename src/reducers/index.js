import { combineReducers, createStore } from 'redux';
import booksReducer from './books';
import filterReducer from './filter'

const store = createStore(
  combineReducers({ books: booksReducer,
                    filter: filterReducer
                  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
