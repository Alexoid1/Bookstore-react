import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <ul className="header">
        <li className="header__logo header__link">
          Bookstore CMS
        </li>
        <li className="header__book_link header__link">
          BOOKS
        </li>
        <li className="header__link">
          CATEGORIES
        </li>
      </ul>
      <div className="user">
        <span className="user-logo" />
      </div>
    </div>

  );
}

export default Header;
