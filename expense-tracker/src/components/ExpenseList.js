import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
