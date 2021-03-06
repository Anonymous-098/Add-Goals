import React, { useState } from "react";
import "./GoalForm.css";

const GoalForm = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      desc: enteredGoal,
    };
    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.addNewGoal(newGoal);
    setEnteredGoal("");
    setIsValid(true);
  };

  const inputHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredGoal(e.target.value);
  };

  return (
    <div className="form-controller">
      <form className={`form ${!isValid?'invalid':''}`} onSubmit={submitHandler}>
        <label>Course Goal</label>
        <input type="text" onChange={inputHandler} value={enteredGoal}></input>
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default GoalForm;
