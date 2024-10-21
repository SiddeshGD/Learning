const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'MODIFY_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { 
              ...todo, 
              text: action.payload.text, 
              expectedEndDate: action.payload.expectedEndDate, 
              description: action.payload.description 
            }
          : todo
      );

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    case 'SET_STATUS':
      return state.map(todo =>
        todo.id === action.payload.id 
          ? { ...todo, status: action.payload.status } 
          : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
