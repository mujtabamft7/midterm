import React from 'react';

function ButtonNumber({ number, isSelected, onClick }) {
  return (
    <button 
      className={`number-button ${isSelected ? 'selected' : ''}`} 
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}

export default ButtonNumber;


