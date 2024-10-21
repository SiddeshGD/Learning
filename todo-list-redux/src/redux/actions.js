let nextId = 1;

export const addTodo = (text, expectedEndDate, description) => ({
  type: 'ADD_TODO',
  payload: {
    id: nextId++, // Increment the ID for each new todo
    text,
    status: 'pending',
    createdAt: new Date().toISOString(),
    expectedEndDate,
    description,
  },
});

export const modifyTodo = (id, text, expectedEndDate, description) => ({
  type: 'MODIFY_TODO',
  payload: { id, text, expectedEndDate, description },
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const setStatus = (id, status) => ({
  type: 'SET_STATUS',
  payload: { id, status },
});
