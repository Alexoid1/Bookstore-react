import React from 'react';
import SearchBookForm from '../components/SearchBookForm'
import ResultBooks from './ResultBooks'

function Library() {
    return (
      <>
        <div className="library">
          <SearchBookForm />
          {/* <ResultBooks/> */}
        </div>
      </>
    );
  }
  
export default Library;