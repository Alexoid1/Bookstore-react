import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <>
      <div>
        <BooksForm />
        <BooksList />
      </div>
    </>
  );
}

export default App;
