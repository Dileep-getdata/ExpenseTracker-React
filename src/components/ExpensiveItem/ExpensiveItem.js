import React, { useState } from "react";
import "./ExpensiveTracker.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../card/Card";

const ExpensiveItem = (props) => {
  const [ammount, setAmmount] = useState(props.ammount);
  const changeTitle = () => {
    setAmmount("100");
    console.log(ammount);
  };
  const deleteItm = () => {};
  return (
    <Card className="expenses-list">
      <ExpenseDate date={props.date} />
      <h3>{props.LocationOfExpenditure}</h3>
      <h3>{props.title}</h3>
      <Card className="ammount-btn">RS:{ammount}</Card>
      <button onClick={changeTitle}>Amount(100$)</button>
      <button onClick={deleteItm}>Delete</button>
    </Card>
  );
};
export default ExpensiveItem;
