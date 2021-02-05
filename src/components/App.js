import React from 'react';
import './App.css';
import Header from './Header';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <BooksForm />
        <BooksList /> 
      </div>
    </>

  );
}

export default App;
