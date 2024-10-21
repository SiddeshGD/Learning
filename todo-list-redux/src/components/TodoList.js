import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, setStatus, modifyTodo } from '../redux/actions';
import "../styles/main.css"
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [expectedEndDate, setExpectedEndDate] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAdd = () => {
    if (text) {
      dispatch(addTodo(text, expectedEndDate, description));
      resetFields();
    }
  };

  const handleModify = (id) => {
    if (text) {
      dispatch(modifyTodo(id, text, expectedEndDate, description));
      resetFields();
      setEditingTodo(null);
    }
  };

  const handleEditClick = (todo) => {
    setText(todo.text);
    setDescription(todo.description);
    setExpectedEndDate(todo.expectedEndDate);
    setEditingTodo(todo.id);
  };

  const resetFields = () => {
    setText('');
    setDescription('');
    setExpectedEndDate('');
  };

  return (
    <div>
      <form className='container' action='#'>
        <h1>Todo List</h1>

        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter todo"
        />
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <input
          type="date"
          value={expectedEndDate}
          onChange={e => setExpectedEndDate(e.target.value)}
        />
        <button onClick={editingTodo ? () => handleModify(editingTodo) : handleAdd}>
          {editingTodo ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>

      <table>
        <thead>
          <tr><th colSpan='7'>Current Task List</th></tr>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Description</th>
            <th>Delete</th>
            <th>Change Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.text}</td>
                <td>{todo.status}</td>
                <td>{todo.description}</td>
                <td>
                  <button className="delete" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </td>
                <td>
                  <button className="complete" onClick={() => dispatch(setStatus(todo.id, 'completed'))}>Complete</button>
                </td>
                <td>
                  <button className="edit" onClick={() => handleEditClick(todo)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No tasks available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
