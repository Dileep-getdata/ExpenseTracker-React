import "./ExpensiveTracker.css";

function ExpensiveItem(props) {
  return (
    <div>
      <div className="expenses-list">
        <h3>
          {props.date.getFullYear()}-{props.date.getMonth()}-
          {props.date.getDate()}
        </h3>
        <h3>{props.LocationOfExpenditure}</h3>
        <h3>{props.title}</h3>
        <div className="ammount-btn">RS:{props.ammount}</div>
      </div>
    </div>
  );
}
export default ExpensiveItem;
