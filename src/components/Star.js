import React from 'react';
import './Star.css';

const Star = () => {
  const score = (5 / 5) * 100;

  return (
    <span className="star-wrapper">
      <span className="stars" style={{ width: `${score}%` }} />
    </span>
  );
};

export default Star;
