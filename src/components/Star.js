import React from 'react';
import './Star.css';

const Star = ({calification}) => {
  const score = (calification / 5) * 100;

  return (
    <span className="star-wrapper">
      <span className="stars" style={{ width: `${score}%` }} />
    </span>
  );
};

export default Star;
