import React from 'react';

export const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`dashboard-card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};