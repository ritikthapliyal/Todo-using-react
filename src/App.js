import "./App.css"
import InputTasks from "./Components/InputTasks/InputTasks"
import Tasks from "./Components/Tasks/Tasks"
import {useState} from 'react'

const dummyData = [
]


function App(){

  const [tasks,updateTasks] = useState(dummyData)
  
  const handleInput = (newTask) => {
    
    updateTasks( () => {
      return [
        newTask,
        ...tasks
      ]
    })
  }

  const removeTask = (doneTask) => {
    updateTasks(()=>{ 
      const updatedTasks = tasks.filter(task => doneTask !== task);
      return updatedTasks
    })
  }

  return (
    <div className="app-container">
      <InputTasks onReceivingInput={handleInput}></InputTasks>
      <div className="app-tasks-container">
        { 
          tasks.length > 0 
          ?
          tasks.map((task)=>{
            return <Tasks str={task} onDoubleClickTask={removeTask}></Tasks>
          })
          :
          <p>No Tasks Entered</p>
        }
      </div>
    </div>
  )

}

export default App