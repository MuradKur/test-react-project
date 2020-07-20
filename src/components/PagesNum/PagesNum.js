import React from 'react';
import './style.scss';

export const PagesNum = ({ active, count }) => {
  return (
    <div className="pages-number">
      <p className="pages-number-text">
        <span>{active}</span> / <span>{count}</span>
      </p>
    </div>
  );
}
