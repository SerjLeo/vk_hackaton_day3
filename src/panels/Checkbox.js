import React from 'react';

import './Checkbox.css';
import Check from '../img/check-symbol.svg';


const Checkbox = ({ checked, onToggle, name = '', value }) => {
  return (
    <div className="Checkbox">
      <input
        name={name}
        value={value}
        checked={checked}
        onChange={onToggle}
        type="checkbox"
      />
      <img
        alt="custom checkbox logo"
        src={Check}
      />
    </div>
  );
};

Checkbox.defaultProps = {
  onToggle: () => {},
};

export default Checkbox;
