import './Tasks.css'
import {useState} from 'react'

function Tasks(data){

    const [isDone,setIsDone] = useState(false)

    const handleClick = () => {
      isDone ? setIsDone(false) : setIsDone(true)
    }

    const handleDoubleClick = () =>{
      data.onDoubleClickTask(data.str)
    }

    return (
      <div className="task-container">
        <p className={`${isDone ? 'done' : 'undone'}`} onClick={handleClick} onDoubleClick={handleDoubleClick}>{data.str}</p>
      </div>
    )
  
  }
  
  export default Tasks