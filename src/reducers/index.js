import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from './books';
import filterReducer from './filter';



const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
})
const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(()=> {console.log('update state' +store.getState())})

export default store;
