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
    <Card className="container">
      <h2>Expensive Tracker</h2>
      <ExpensiveItem
        title={expense[0].title}
        ammount={expense[0].ammount}
        date={expense[0].date}
        LocationOfExpenditure={expense[0].LocationOfExpenditure}
      />
    </Card>
  );
};

export default App;
