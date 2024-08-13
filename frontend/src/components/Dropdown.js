import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ items }) => {
  return (
    <div className="dropdown">
      {items.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
