import React from "react";
import "./ExpensiveDate.css";
import Card from "../card/Card";
const ExpenseDate = (props) => {
  return (
    <Card className="date-list">
      <div>{props.date.toLocaleString("en-US", { month: "long" })}</div>
      <div>{props.date.toLocaleString("en-US", { day: "2-digit" })}</div>
      <div>{props.date.getFullYear()}</div>
    </Card>
  );
};
export default ExpenseDate;
