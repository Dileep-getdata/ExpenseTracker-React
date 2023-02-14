// import logo from "./logo.svg";
import "./App.css";
import "./components/ExpensiveItem/ExpensiveItem";
import ExpensiveItem from "./components/ExpensiveItem/ExpensiveItem";

function App() {
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
  ];
  return (
    <div>
      <h2>Expensive Tracker</h2>
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
    </div>
  );
}

export default App;
