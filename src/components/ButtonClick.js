import React from 'react';

function ButtonClick({ label, onClick }) {
  return (
    <button className="action-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonClick;


