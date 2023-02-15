import "./ExpensiveTracker.css";
import ExpenseDate from "./ExpenseDate";

function ExpensiveItem(props) {
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
      {expense.map((each) => (
        <div className="expenses-list">
          <ExpenseDate date={each.date} />
          <h3>{each.LocationOfExpenditure}</h3>
          <h3>{each.title}</h3>
          <div className="ammount-btn">RS:{each.ammount}</div>
        </div>
      ))}
    </div>
  );
}
export default ExpensiveItem;
