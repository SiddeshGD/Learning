import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion, removeTask }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Date</th>
          <th>Expected End Date</th>
          <th>Status</th>
          <th>Change Status</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <td onClick={() => toggleTaskCompletion(index)}>{task.text}</td>
            <td>{task.date}</td>
            <td>{task.endDate}</td>
            <td>{task.completed ? 'Completed' : 'Pending'}</td>
            <td>
              <button onClick={() => toggleTaskCompletion(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
            </td>
            <td>
              <button onClick={() => removeTask(index)} style={{ color: 'red' }}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
