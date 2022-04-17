import React, { useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalsList from "./components/GoalsList";

const App = () => {

  const [goals, setGoals] = useState([
    { desc: 'Do all exercises!', id: 'g1' },
    { desc: 'Finish the course!', id: 'g2' }
  ]);

  const newGoalToAdd = (newGoal) => {
    setGoals([newGoal,...goals]);
  };

  const getID = (id) =>{
    const newGoals = goals.filter((goal)=>{
      return goal.id!==id
    })
    setGoals(newGoals);
  }

  return (
    <div>
      <GoalForm addNewGoal={newGoalToAdd} />
      <GoalsList goals={goals} onSelectID={getID}/>
    </div>
  );
};

export default App;
