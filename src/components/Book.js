import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import Star from './Star';
import { connect } from 'react-redux';
import { deleteBook } from '../actions/index';
const Book = ({
  bookID,
  title,
  category,
  author,
  percentage,
  calification,
  deleteBook
}) => {
  const [visible, setHide] = useState('All');
  return (
  <div className="book-container">
    <div className="book-details">
      <div>
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
      </div>
      <div className="actions">
        <button
          type="button"
        >
          comments
        </button>
        <button
          type="button"
          onClick={() => {
            deleteBook(bookID);
          }}
        >
          Remove
        </button>
        <button
          type="button"
        >
          Edits
        </button>
      </div>
    </div>
    <div className="complete-container">
      <div className="complete">
        <div className="circle" />
        <div className="complete-value">
          <span
            className="percent"
          >
            {`${percentage}%`}
          </span>
          <span className="faded-text">Completed</span>
        </div>
      </div>
      <div className="update">
        <span className="title hide">SCORE</span>
        <Star className="hide2" calification={calification}/>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
)};

Book.propTypes = {
  bookID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
    {
      return{deleteBook:(id)=> dispatch(deleteBook(id)) }
    } ;



export default connect(null, mapDispatchToProps)(Book);
