import React, { useState } from "react";
import "./ExpenseForm.css";
import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onAddExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const [formIsShown, setFormIsShown] = useState(false);

  const changeFormState = () => {
    if (formIsShown === false) {
      setFormIsShown(true);
    } else {
      setFormIsShown(false);
    }
  };

  const cancelForm = () => {
    setFormIsShown(false);
  };

  const open = <button onClick={changeFormState}>New Expense</button>;

  if (formIsShown === true) {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                value={enteredTitle}
                type="text"
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                value={enteredAmount}
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                value={enteredDate}
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <button type="submit">Add Expense</button>
          <button onClick={cancelForm}>Cancel</button>
        </form>
      </div>
    );
  } else return open;
};

export default ExpenseForm;
