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

  const deleteTask = (id) => {
    const filteredArray = myTasks.filter(item => item.id !== id)
    setMyTasks(filteredArray)
  }

  return (
    <div className="container mt-5 ">
      <h1 className="text-center">CRUD Simple App</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks List</h4>
          <ul className="list-group">
            {/* Render every task  */
              myTasks.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.myTask}</span>
                  <button 
                    className="btn btn-danger btn-sm float-end mx-2"
                    onClick={() => deleteTask(item.id)}
                  >
                    Delete
                  </button>

                  <button 
                    className="btn btn-warning btn-sm float-end"
                  >
                    Edit
                  </button>
                </li>
              ))
            }
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
