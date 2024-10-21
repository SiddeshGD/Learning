/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;*/
/*
import React, { useState } from 'react';
import './App.css';




const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleRemoveTask = () => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        <table>
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                onClick={() => toggleTaskCompletion(index)}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {task.text}
              </span>
              <button onClick={() => toggleTaskCompletion(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <span style={{ marginLeft: '10px', fontStyle: 'italic' }}>
                Status: {task.completed ? 'Completed' : 'Pending'}
              </span>
            </li>
          ))}
        </table>
      </ul>
    </div>
  );
};
*/
import React, { useState } from 'react';
import './App.css';//not in use
import './Home.css';

const App = () => {
  // [tasks, setTasks]  tasks is used to define and holds current state and setTasks is values stored.
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const handleAddTask = () => {
    //check the value inside the taskInput is not null or empty trim is used to remove the spaces
    if (taskInput.trim() !== '') {
      var today = new Date();
      var currentDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

      const date = new Date(dateInput);
      const endDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;


      setTasks([...tasks, { text: taskInput, date: currentDate, endDate: endDate, completed: false }]);
      //after adding to list empty the text and date input 
      setTaskInput('');
      setDateInput('');

    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">

      <div class='form'>
        <h1>To-Do List</h1>
        <div class="formGroup">
          <label>Enter the name of task</label>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task"
          />
        </div>
        <div class="formGroup">
          <label>Expected end date</label>
          <input
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)} // Corrected the state update
            placeholder="End date"
          />
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
        <table border="1"><tr><th>Task Name</th><th>Date </th><th>Expected End Date </th><th>Status</th><th>Change Status</th><th>Remove</th></tr>{

          tasks.map((task, index) => (

            <tr key={index} style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            //Change the style of the row (s)
            >
              <td>
                <span onClick={() => toggleTaskCompletion(index)}
                >
                  {task.text}
                </span>
              </td>
              <td>
                <span>{task.date}</span>
              </td>
              <td>
                <span>{task.endDate}</span>
              </td>

              <td>
                <span style={{ marginLeft: '10px', fontStyle: 'italic' }}>
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
              </td>


              <td>
                <button onClick={() => toggleTaskCompletion(index)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
              </td>

              <td>
                <button
                  onClick={() => removeTask(index)}
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  Remove
                </button>
              </td>

            </tr>

          ))
        }</table>

    </div>
  );
};
export default App;