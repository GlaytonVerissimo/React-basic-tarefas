import React from 'react'
import "./Task.css"



const Task = ({task, handleTaskClick, handleTaskRemove}) => {
    
    return(
        <div className="task-container"
         style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>

        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </div>

        <div className="buttons-container">
            <button className="remove-task-button" onClick={() => handleTaskRemove(task.id)}>X</button>



        </div>

        </div>
    
    // <div className="task-container">{task.title}</div>
    )
}
 
export default Task;