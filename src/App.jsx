import React, { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router,Route } from "react-router-dom";
import axios from "axios";

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from "./components/Header";
import TaskDetais from "./components/TaskDetails";


import "./App.css"


const App = () =>{
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar Programação',
        completed: false
      },
      {
        id: '2',
        title: 'Ler Livros',
        completed: true
      }
    ])

    useEffect(() =>{
        const fetchsTasks = async () =>{
            const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
            setTasks(data)
          }
        fetchsTasks()
    },[])

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [...tasks, {
          title: taskTitle,
          id: uuidv4(),
          completed: false
        }]
        setTasks(newTasks)
    }

    const handleTaskDelete = (taskId) =>{
        const newTasks = tasks.filter(task => task.id !== taskId)

        return setTasks(newTasks)
    }

    const handleTaskClick = (taskId) =>{
        const newTasks = tasks.map(task =>{
          if(task.id === taskId) return {...task, completed: !task.completed}
          return task;
        })
        setTasks(newTasks)
    }


    return (
    <Router>
        <div className="container">
          <Header/>
          <Route path='/' exact render={() => (
              <>
                  <AddTask handleTaskAddition={handleTaskAddition} />
                  <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
              </>
          )}/>
          <Route path="/:taskTitle" exact component={TaskDetais}/>
        </div>
    </Router>
)
    
}

export default App