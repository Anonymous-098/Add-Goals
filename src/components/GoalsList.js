import React, { useState } from "react";
import "./GoalsList.css";

const GoalsList = (props) => {

    const clickHandler = (id) =>{
        props.onSelectID(id);
    }

    return(
        <div className="goalsList">
            {props.goals.map((goal)=>{
                return <div className="goal" key={goal.id} onClick={()=>clickHandler(goal.id)}>{goal.desc}</div>
            })}
        </div>
    )

};

export default GoalsList;
