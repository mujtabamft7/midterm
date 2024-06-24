import React from 'react';

function SelectedNumbers({ selectedNumbers, totalAmount }) {
  return (
    <div className="selected-numbers">
      <h3>Ticket Numbers:</h3>
      <ul>
        {selectedNumbers.map(number => <li key={number}>{number}</li>)}
      </ul>
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
}
export default SelectedNumbers;


