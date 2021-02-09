import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchBooks } from '../actions/index';
import Spinner from './Spinner';
import './SearchBookForm.css';
import CardBook from './CardBook';

const SearchBookForm = ({ searchBooks, search }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(search.loading);
  const handleTextChange = event => {
    setText(() => event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    searchBooks(text);
  };

  useEffect(() => {
    if (search.books > 0) {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return (
      <>
        <div>
          <form className="formSe">
            <div className="inputSearch">
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Book Name"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="searchBook"
            >
              Search Book
            </button>
          </form>
        </div>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <div>
        <form className="formSe">
          <div className="inputSearch">
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Book Name"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="searchBook"
          >
            Search Book
          </button>
        </form>
      </div>

      <div className="boo">
        { search.books.map(book => (
          <CardBook
            key={book.id}
            title={book.volumeInfo.title}
            pageCount={book.volumeInfo.pageCount}
            language={book.volumeInfo.language}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            previewLink={book.volumeInfo.previewLink}
            infoLink={book.volumeInfo.infoLink}
            image={book.volumeInfo.imageLinks}
            categories={book.volumeInfo.categories}
          />
        ))}

      </div>
    </>
  );
};
SearchBookForm.propTypes = {
  searchBooks: PropTypes.func.isRequired,
  search: PropTypes.arrayOf(PropTypes.object),
};

SearchBookForm.defaultProps = {
  search: [],
};
const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({ searchBooks: text => dispatch(searchBooks(text)) });

export default connect(mapStateToProps, mapDispatchToProps)(SearchBookForm);
