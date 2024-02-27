import { Fragment, useRef, useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState([]);
  const inputRef = useRef()

  const addTask = () => {
    const value = inputRef.current.value;
    const newData = { compelet: false, value }
    // console.log(value);
    if (value !== '') {
      setTask([...task, newData]);
      inputRef.current.value = '';
    } else {
      alert("Task Field is Empty , Enter Task")
    }
  }

  const itemDone = (index) => {
    const doneItem = [...task]
    doneItem[index].compelet = !doneItem[index].compelet
    setTask(doneItem)
  }
  // console.log(task);

  const deleteTask = (index) => {
    const taskD = [...task]
    taskD.splice(index, 1)
    setTask(taskD)
    // console.log(index);
  }

  return (
    <div className='App'>
      <h2>TODO LIST 📝</h2>
      <input ref={inputRef} placeholder='Enter New Task.....' />
      <button onClick={addTask}>ADD</button>
      <ul>
        {
          task.length >= 1 ? task.map((task, index) => {
            return (<div  key={index}  style={{ display: "flex", justifyContent: "space-between" , textAlign:"center" , marginBottom:"10px"}}>
              <li className={task.compelet ? "diffStyle" : ""} onClick={() => itemDone(index)}> {task.value}</li>
              <span onClick={() => deleteTask(index)}> 🗑️ </span>
            </div>)
          }) : <h3>No Available Tasks........</h3>
        }
      </ul>

    </div>
  );
}

export default App;
