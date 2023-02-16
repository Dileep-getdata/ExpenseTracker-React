// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/Card";

import ExpensiveItem from "./components/ExpensiveItem/ExpensiveItem";

const App = () => {
  return (
    <Card>
      <h2>Expensive Tracker</h2>
      <ExpensiveItem />
    </Card>
  );
};

export default App;
