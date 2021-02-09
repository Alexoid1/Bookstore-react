import React from 'react';
import PropTypes from 'prop-types';
import './Star.css';

const Star = ({ calification }) => {
  const score = (calification / 5) * 100;

  return (
    <span className="star-wrapper">
      <span className="stars" style={{ width: `${score}%` }} />
    </span>
  );
};
Star.propTypes = {
  calification: PropTypes.number.isRequired,
};

export default Star;
