import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setTotal(total + expense.amount);
  };

  const deleteExpense = (id) => {
    const expenseToDelete = expenses.find(expense => expense.id === id);
    setExpenses(expenses.filter(expense => expense.id !== id));
    setTotal(total - expenseToDelete.amount);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <div className="total-expenses">
          <h2>Total Expenses: R{total.toFixed(2)}</h2>
        </div>
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div>
    </div>
  );
};

export default App;
