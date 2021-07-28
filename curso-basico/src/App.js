import React, {useState} from 'react'
import {v4 as uuidv4} from "uuid"

import Tasks from "./components/Tasks"
import AddTask from './components/AddTask';
import "./App.css"



const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks =  tasks.map(task => {
      if(task.id === taskId) return {... task, completed: !task.completed}
      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
      title: taskTitle,
      id: uuidv4(),
      completed: false
      }]

    setTasks(newTasks)
  }

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task=> task.id !== taskId)

    setTasks(newTasks)
  }
  
return(
  
  <>

  <div className="container"> 
    <AddTask handleTaskAddition={handleTaskAddition} />
    
    <Tasks tasks={tasks} handleTaskClick={handleTaskClick}
     handleTaskRemove={handleTaskRemove} />
  </div>

  </>
)
}

export default App;
