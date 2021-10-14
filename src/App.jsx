import React, { useState } from "react"
import { nanoid } from 'nanoid'


function App() {

  const [task, setTask] = useState('')
  const [myTasks, setMyTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    console.log(task)
    if(!task.trim()){
      console.log("Empty element")
      return
    }
    console.log(task)
    setMyTasks([
      ...myTasks,
      {id: nanoid(10), myTask: task}
    ])

    setTask('')
  }

  return (
    <div className="container mt-5 ">
      <h1 className="text-center">CRUD Simple App</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks List</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Task Name</span>
              <button className="btn btn-danger btn-sm float-end mx-2">Delete</button>
              <button className="btn btn-warning btn-sm float-end">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form onSubmit={addTask}>
            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Add a new task"
              onChange={ (e) => setTask(e.target.value) }
              value={task} 
            />
            <div className="d-grid gap-2">
              <button className="btn btn-dark" type="submit">Add</button>
            </div> 
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
