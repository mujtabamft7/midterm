import React, { useState, useEffect, Fragment } from 'react';
import NumberSelection from './components/NumberSelection';
import ButtonMoney from './components/ButtonMoney';
import SelectedNumbers from './components/SelectedNumbers';
import ButtonClick from './components/ButtonClick';
import './App.css';

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [canAddMoney, setCanAddMoney] = useState(false);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (selectedNumbers.length === 5) {
      setCanAddMoney(true);
    } else {
      setCanAddMoney(false);
    }
  }, [selectedNumbers]);

  function handleNumberSelect(number) {
    if (selectedNumbers.length < 5) {
      setSelectedNumbers(selectedNumbers.concat(number));
    } else {
      alert("You can't select more than 5 numbers");
    }
  }

  function handleNumberDeselect(number) {
    const newSelectedNumbers = selectedNumbers.filter((n) => n !== number);
    setSelectedNumbers(newSelectedNumbers);
  }

  function handleAmountAdd(amount) {
    setTotalAmount(totalAmount + amount);
  }

  function handleClear() {
    setSelectedNumbers([]);
    setTotalAmount(0);
  }

  function handleRandom() {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const num = Math.floor(Math.random() * 36) + 1;
      if (randomNumbers.indexOf(num) === -1) {
        randomNumbers.push(num);
      }
    }
    setSelectedNumbers(randomNumbers);
    setTotalAmount(0);
  }

  function handleCashOut() {
    if (selectedNumbers.length === 5 && totalAmount > 0) {
      const newTicket = {
        numbers: selectedNumbers,
        amount: totalAmount,
      };
      setTickets(tickets.concat(newTicket));
      handleClear();
    } else {
      alert('Select 5 numbers and assign money before cashing out');
    }
  }

  function handleClearSavedTickets() {
    setTickets([]);
  }

  return (
    <Fragment>
      <div className="App">
        <div className="left-panel">
          <div className="action-buttons">
            <ButtonClick label="Clear all" onClick={handleClear} />
            <ButtonClick label="Random numbers" onClick={handleRandom} />
            <ButtonClick label="Cash out a ticket" onClick={handleCashOut} />
            <ButtonClick label="Clear saved tickets" onClick={handleClearSavedTickets} />
          </div>
        </div>
        <div className="center-panel">
          <NumberSelection 
            selectedNumbers={selectedNumbers}
            onNumberSelect={handleNumberSelect}
            onNumberDeselect={handleNumberDeselect}
          />
          <div className="money-buttons">
            {[5, 25, 50, 100].map((amount) => (
              <ButtonMoney 
                key={amount} 
                amount={amount} 
                onAmountAdd={handleAmountAdd} 
                canAddMoney={canAddMoney}
              />
            ))}
          </div>
          <SelectedNumbers selectedNumbers={selectedNumbers} totalAmount={totalAmount} />
        </div>
        <div className="right-panel">
          <h3>Saved Tickets</h3>
          <ul className="saved-tickets">
            {tickets.map((ticket, index) => (
              <li key={index}>
                Numbers: {ticket.numbers.join(', ')}, Total: ${ticket.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
