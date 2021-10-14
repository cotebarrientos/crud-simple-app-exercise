import React, { useState } from "react"
import { nanoid } from 'nanoid' // it generates a random id


function App() {

  // render a task
  const [task, setTask] = useState('')
  // render all tasks
  const [myTasks, setMyTasks] = useState([])
  // render edit form for tasks
  const [editMyTask, setEditMyTask] = useState(false)
  // set the current id
  const [id, setId] = useState('')
  // To show errors inside the form
  const [error, setError] = useState(null)


  // Add a new task from the form
  const addTask = (e) => {
    e.preventDefault()
    console.log(task)
    if(!task.trim()){
      console.log("Empty element")
      setError("Please, you must write something in this field")
      return
    }
    console.log(task)
    setMyTasks([
      ...myTasks,
      {id: nanoid(10), myTask: task}
    ])

    setTask('')
    setError(null)
  }

  // Remove a task when the user press the delete button
  const deleteTask = (id) => {
    const filteredArray = myTasks.filter(item => item.id !== id)
    setMyTasks(filteredArray)
  }

  // Edit a task created by pressing the edit button in the task list and using an edit form
  const editTask = item => {
    console.log(item)
    setEditMyTask(true)
    setTask(item.myTask)
    setId(item.id)
  }

  // When the user press the edit button in the edit form
  const editThisTask = e => {
    e.preventDefault()
    console.log(task)
    if(!task.trim()){
      console.log("Empty element")
      setError("Please, you must write something in this field")
      return
    } 

    const editedArray =  myTasks.map(
      item => item.id === id ? {id, myTask: task} : item
    )

    setMyTasks(editedArray)
    setEditMyTask(false)
    setTask('')
    setId('')
    setError(null)
  }

  return (
    <div className="container mt-5 ">
      <h1 className="text-center">
        <span className="text-success">C</span>
        <span className="text-primary">R</span>
        <span className="text-warning">U</span>
        <span className="text-danger">D </span>
        Simple App</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks List</h4>
          <ul className="list-group">
            {
            /* Render every task  */

              myTasks.length === 0 ? (
                <li className="list-group-item">
                  <span className="lead">Sorry, no items yet</span>
                  <span className="padding-icons">
                  <i className="far fa-frown"></i>
                  </span>
                </li>
              ) : (
                myTasks.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.myTask}</span>
                    <button 
                      className="btn btn-danger btn-sm float-end mx-2"
                      onClick={() => deleteTask(item.id)}
                    >
                      <span className="text-uppercase">Delete</span>
                      <span className="padding-icons">
                        <i className="far fa-trash-alt"></i>
                      </span>  
                    </button>
  
                    <button 
                      className="btn btn-warning btn-sm float-end"
                      onClick={() => editTask(item)}
                    >
                      <span className="text-uppercase">Edit</span>
                      <span className="padding-icons">
                        <i className="fas fa-pen"></i>
                      </span> 
                    </button>
                  </li>
                ))
              ) 
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              editMyTask ? "Edit a task" : "Add a task"
            }
          </h4>
          <form onSubmit={ editMyTask ? editThisTask : addTask }>

            {
              error ? <span className="text-danger">{error}</span> : null
            }

            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Add a new task"
              onChange={ (e) => setTask(e.target.value) }
              value={task} 
            />
            {
              editMyTask ? (
                <div className="d-grid gap-2">
                  <button className="btn btn-warning" type="submit">
                    <span className="text-uppercase">Edit</span>
                    <span className="padding-icons">
                      <i className="fas fa-edit"></i>
                    </span>
                  </button>
                </div> 
              ) : (
                <div className="d-grid gap-2">
                  <button className="btn btn-dark" type="submit">
                    <span className="text-uppercase">Add</span>
                    <span className="padding-icons">
                      <i className="far fa-plus-square"></i>
                    </span>
                    </button>
                </div> 
              )
            }
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
