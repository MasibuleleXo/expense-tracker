import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <div className="expense-item">
      <span>{expense.title}</span>
      <span>R{expense.amount.toFixed(2)}</span>
      <button className="btn btn-danger" onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
