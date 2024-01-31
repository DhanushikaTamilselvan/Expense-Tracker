import React, { useState } from 'react';

function ExpenseForm({ onExpenseSubmit }) {
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleExpenseChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onExpenseSubmit(expenseAmount);
  };

  return (
    <div>
       <h3></h3>
      <form onSubmit={handleFormSubmit}>
        <label>

          Expense Amount : 
          <input
            type="number"
            value={expenseAmount}
            onChange={handleExpenseChange}
            placeholder="Enter expense amount"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
