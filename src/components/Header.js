import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <ul className="header">
        <li className="header__logo header__link">
          Bookstore AXZ
        </li>
        <li className="header__book_link header__link">
          <Link className="links" to="/">BOOKS</Link>
        </li>
        <li className="header__link">
          <Link className="links" to="/library">SEARCH BOOKS</Link>
        </li>
      </ul>
      <div className="user">
        <span className="user-logo" />
      </div>
    </div>

  );
}

export default Header;
