import React from 'react';
import './Library.css';

function Library() {
    return (
      <>
        <div>
          <SearchBookForm />
          <ResultBooks/>
        </div>
      </>
    );
  }
  
  export default Library;