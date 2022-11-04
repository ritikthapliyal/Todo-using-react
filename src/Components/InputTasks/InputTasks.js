import './InputTasks.css'
import {useState} from 'react'


function InputTasks(data){

    const [currentInput,setcurrentInput] = useState('')
    const [isValid,setIsValid] = useState(true)

    const saveCurrentInput = (event)=>{
      setcurrentInput(event.target.value)
    }
    
    const buttonHandler = () => {

      if(currentInput.trim().length === 0){
        setIsValid(false)
        return 
      }

      data.onReceivingInput(currentInput)
      setIsValid(true)
      setcurrentInput('')

    }

    return (
      <div className="input-task-container-outer">
        <div className="input-task-container">
          <input className={`${isValid ? 'valid' : 'invalid'}`} type="text" placeholder="Enter Task" value={currentInput} onChange={saveCurrentInput}></input>
          <div className="button-container">
              <button onClick={buttonHandler}>Add Task</button>
          </div>
        </div>
      </div>
    )
  
  }
  
  export default InputTasks