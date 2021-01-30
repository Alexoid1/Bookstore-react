import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../action-types';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  value,
});
