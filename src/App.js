// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Card from "./components/card/Card";

import ExpensiveItem from "./components/ExpensiveItem/ExpensiveItem";

const App = () => {
  const expense = [
    {
      title: "food",
      ammount: 10,
      date: new Date(),
      LocationOfExpenditure: "Secuendrabad",
    },
    {
      title: "petrole",
      ammount: 120,
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
    <Card className="container">
      <h2>Expensive Tracker</h2>
      <Card className="expense-container">
        <ExpensiveItem
          title={expense[0].title}
          ammount={expense[0].ammount}
          date={expense[0].date}
          LocationOfExpenditure={expense[0].LocationOfExpenditure}
        />
        <ExpensiveItem
          title={expense[1].title}
          ammount={expense[1].ammount}
          date={expense[1].date}
          LocationOfExpenditure={expense[1].LocationOfExpenditure}
        />
        <ExpensiveItem
          title={expense[2].title}
          ammount={expense[2].ammount}
          date={expense[2].date}
          LocationOfExpenditure={expense[2].LocationOfExpenditure}
        />
      </Card>
    </Card>
  );
};

export default App;
