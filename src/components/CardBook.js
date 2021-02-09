import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import './CardBook.css';

const CardBook = ({
  title, pageCount, language, authors = ['Incognito'], description, previewLink, infoLink, image = '', categories = ['Learning'], createBook,
}) => {
  const [text, setText] = useState('ADD BOOK TO MY LIBRARY');
  const firstAuthor = authors[0];
  const mainCategory = categories[0];
  const handleAddBook = e => {
    e.preventDefault();
    createBook({ title, author: firstAuthor, category: mainCategory });
    setText('BOOK ADDED');
  };
  return (
    <div className="item">
      <h3 className="titleItem">{title}</h3>
      <p className="pages">
        <strong>Pages:</strong>
        {' '}
        {pageCount}
      </p>
      <p>
        <strong>Lenguage:</strong>
        {' '}
        {language}
      </p>
      <div className="imgBook"><img src={image.smallThumbnail} alt="cover" /></div>
      <div className="desContainer"><p>{description}</p></div>
      <Link to={previewLink} target="_blank" className="limk">Read</Link>
      <Link to={infoLink} target="_blank" className="limk">Info</Link>
      <div className="buttonBox"><button type="button" onClick={handleAddBook}>{text}</button></div>
    </div>
  );
};

CardBook.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({ smallThumbnail: PropTypes.string.isRequired }),
  language: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  authors: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
  infoLink: PropTypes.string.isRequired,
  createBook: PropTypes.func.isRequired,
};

CardBook.defaultProps = {
  image: '',
  authors: ['Incognito'],
  categories: ['Learning'],
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = { createBook };

export default connect(mapStateToProps, mapDispatchToProps)(CardBook);
