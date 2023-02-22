import React, { useState } from "react";
import "./ExpensiveTracker.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../card/Card";

const ExpensiveItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const changeTitle = () => {
    setTitle("Changed");
    console.log(title);
  };
  const deleteItm = () => {};
  return (
    <Card className="expense-container">
      <Card className="expenses-list">
        <ExpenseDate date={props.date} />
        <h3>{props.LocationOfExpenditure}</h3>
        <h3>{title}</h3>
        <Card className="ammount-btn">RS:{props.ammount}</Card>
        <button onClick={changeTitle}>Edit</button>
        <button onClick={deleteItm}>Delete</button>
      </Card>
    </Card>
  );
};
export default ExpensiveItem;
