import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteBook, updateBook } from '../actions/index';
import PropTypes from 'prop-types';
import './Book.css';
import Star from './Star';

const Book = ({
  bookID,
  title,
  category,
  author,
  percentage,
  calification,
  deleteBook,
  updateBook,
}) => {
  const[visible, setVisible] = useState(false)
  const [perc, setPerc] = useState(percentage);
  const [cali, setCali] = useState(calification);
  const handleSubmit = e => {
    e.preventDefault();
    
    const num=parseInt(perc)
    updateBook(bookID,num,cali)
    setVisible(false)
  };

  const handlePercentageChange = event => {
    setPerc(() => event.target.value);
  };

  const handleCalificationChange = event => {
    setCali(() => event.target.value);
  };
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
            {`${perc}%`}
          </span>
          <Star  calification={cali}/>
          
          <span className="faded-text">Completed</span>
          
        </div>
      </div>
      { visible ? 
      <div className="update2">
        <form className="formUpdate">
          <input type="number" min="1" max="5" onChange={handleCalificationChange} value={cali}></input>
          <input type="range" id="percentage" onChange={handlePercentageChange} name="percentage" min="0" max="100" step="1" value={perc}></input>
          <button type="button" onClick={handleSubmit}>SAVE PROGRESS</button>
        </form>
      </div> : 
      <div className="update">
        <span className="title">SCORE</span>
        
        <button type="button" onClick={()=>setVisible(true)}>UPDATE PROGRESS</button>
      </div>
      }
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
  calification: PropTypes.number.isRequired,
  updateBook: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
    {
      return{deleteBook:(id)=> dispatch(deleteBook(id)),
             updateBook:(id,percentage,calification)=> dispatch(updateBook(id,percentage,calification)) }
    } ;



export default connect(null, mapDispatchToProps)(Book);
