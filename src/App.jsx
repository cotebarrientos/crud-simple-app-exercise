
function App() {
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
        </div>
      </div>

    </div>
  );
}

export default App;
