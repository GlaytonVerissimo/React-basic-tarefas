import React from 'react'

import Task from "./Task"

const Tasks = ({tasks, handleTaskClick, handleTaskRemove}) => {
  
return(
    <div>
        {tasks.map((task) => (
            <Task task={task} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>
        ))}
    </div>

    )
}

export default Tasks;