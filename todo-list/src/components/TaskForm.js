import React, { useState } from 'react';


const TaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const today = new Date();
      const currentDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
      const date = new Date(dateInput);
      const endDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

      addTask({ text: taskInput, date: currentDate, endDate, completed: false });
      setTaskInput('');
      setDateInput('');
    }
  };

  return (
    <div className='form'>
      <div className="formGroup">
        <label>Enter the name of task</label>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
      </div>
      <div className="formGroup">
        <label>Expected end date</label>
        <input
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
        />
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
