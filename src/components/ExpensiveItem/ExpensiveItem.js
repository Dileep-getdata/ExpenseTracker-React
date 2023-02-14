function ExpensiveItem({ title, ammount }) {
  const expense = [
    { title: "food", ammount: 10 },
    { title: "petrole", ammount: 100 },
  ];
  return (
    <div>
      <div>
        {expense.map((each) => {
          return (
            <div>
              <h3>{each.title}</h3>
              <div>RS:{each.ammount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ExpensiveItem;
