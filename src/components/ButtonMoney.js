import React from 'react';

function ButtonMoney({ amount, onAmountAdd, canAddMoney }) {
  const handleClick = () => {
    if (canAddMoney) {
      onAmountAdd(amount);
    } else {
      alert("Please select 5 numbers before adding money.");
    }
  };
  return (
    <button className="money-button" onClick={handleClick}>
      ${amount}
    </button>
  );
}

export default ButtonMoney;

