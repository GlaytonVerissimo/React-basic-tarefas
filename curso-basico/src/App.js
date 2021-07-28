import React, {useState} from 'react'
import {v4 as uuidv4} from "uuid"
import { BrowserRouter as Router, Route} from 'react-router-dom';


import Tasks from "./components/Tasks"
import AddTask from './components/AddTask';
import Header from "./components/Header"
import "./App.css"



const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programação',
      completed: true
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true
    },
    {
      id: '3',
      title: 'Brincar com o cachorro',
      completed: false
    },
    {
      id: '4',
      title: 'Limpar a casa',
      completed: true
    },
    {
      id: '5',
      title: 'encher as garrafa de água',
      completed: false
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
  
  <Router>
          <div className="container"> 
            <Header/>
            <Route patch="/" exact render={() => (
               <>
               <AddTask handleTaskAddition={handleTaskAddition} />
               <Tasks
               tasks={tasks}
               handleTaskClick={handleTaskClick}
               handleTaskRemove={handleTaskRemove}
               />
               </>
            )} />
          </div>
  </Router>

)
}

export default App;
