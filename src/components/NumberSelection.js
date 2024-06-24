import React from 'react';
import ButtonNumber from './ButtonNumber';
function NumberSelection({ selectedNumbers, onNumberSelect, onNumberDeselect }) {
  const handleClick = (number) => {
    if (selectedNumbers.includes(number)) {
      onNumberDeselect(number);
    } else {
      onNumberSelect(number);
    }
  };
  return (
    <div className="number-selection">
      {Array.from({ length: 36 }, (_, i) => i + 1).map(number => (
        <ButtonNumber 
          key={number}
          number={number}
          isSelected={selectedNumbers.includes(number)}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
export default NumberSelection;


