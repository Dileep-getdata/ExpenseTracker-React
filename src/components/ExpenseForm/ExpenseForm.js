import React, { useState } from "react";
const ExpenseForm = () => {
  const titleChange = (event) => {
    console.log(event.target.value);
  };
  const ammountChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <form>
        <div>
          <div>
            <label>Expense Title</label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={titleChange}
            ></input>
          </div>
          <div>
            <label>Expense Ammount</label>
            <input
              id="ammount"
              type="number"
              min="0.01"
              step="0.01"
              name="ammount"
              onChange={ammountChange}
            ></input>
          </div>
          <div>
            <label>Expense Ammount</label>
            <input
              id="date"
              type="date"
              min="2019-01-01"
              max="2023-03-01"
              name="date"
            ></input>
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
