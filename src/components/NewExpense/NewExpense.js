import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
