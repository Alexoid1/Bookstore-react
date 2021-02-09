import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import './CardBook.css';

const CardBook = ({title, pageCount, language, authors=['Incognito'], description, previewLink, infoLink, image='',categories=['Learning'],createBook}) => {
  const firstAuthor=authors[0];
  const mainCategory=categories[0];
  const handleAddBook = (e) =>{
    e.preventDefault();
    console.log({title,author:firstAuthor,mainCategory})
    createBook({title,author:firstAuthor,category:mainCategory})
  }
  return (
    <div className="item" >
      <h3 className="titleItem">{title}</h3>
      <p className="pages"><strong>Pages:</strong> {pageCount}</p>
      <p><strong>Lenguage:</strong> {language}</p>
      <div className="imgBook"><img src={image.smallThumbnail}/></div>
      <div className="desContainer"><p>{description}</p></div>
      <Link to={previewLink} target="_blank" className="limk">Read</Link>
      <Link to={infoLink} target="_blank" className="limk">Info</Link>
      <div className="buttonBox"><button type="button" onClick={handleAddBook} >ADD BOOK TO MY LIBRARY</button></div>
    </div>
  );
};

const mapStateToProps = state=> ({
  books:state.books,
});

const mapDispatchToProps = { createBook };

export default connect(mapStateToProps, mapDispatchToProps)(CardBook);
