import React from "react";
import "./ExpensiveTracker.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../card/Card";

const ExpensiveItem = (props) => {
  const expense = [
    {
      title: "food",
      ammount: 10,
      date: new Date(),
      LocationOfExpenditure: "Secuendrabad",
    },
    {
      title: "petrole",
      ammount: 100,
      date: new Date(),
      LocationOfExpenditure: "KPHB",
    },
    {
      title: "petrole",
      ammount: 100,
      date: new Date(),
      LocationOfExpenditure: "KPHB",
    },
  ];
  return (
    <Card className="expense-container">
      {expense.map((each) => (
        <Card className="expenses-list">
          <ExpenseDate date={each.date} />
          <h3>{each.LocationOfExpenditure}</h3>
          <h3>{each.title}</h3>
          <Card className="ammount-btn">RS:{each.ammount}</Card>
        </Card>
      ))}
    </Card>
  );
};
export default ExpensiveItem;
