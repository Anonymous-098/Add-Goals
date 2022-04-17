import React, { useState } from "react";
import "./GoalForm.css";

const GoalForm = (props) =>{
    const [enteredGoal,setEnteredGoal] = useState('');
 
    const submitHandler = (e) =>{
        e.preventDefault();

        const newGoal = {
            id:Math.random().toString(),
            desc:enteredGoal,
        }
        props.addNewGoal(newGoal);
        setEnteredGoal('');
    }

    const inputHandler = (e) =>{
        setEnteredGoal(e.target.value);
    }

    return(
        <div className="form-controller">
            <form className="form" onSubmit={submitHandler}>
                <label>Course Goal</label>
                <input type="text" onChange={inputHandler} value={enteredGoal}></input>
                <button type="submit">Add Goal</button>
            </form>
        </div>
    )
}

export default GoalForm;