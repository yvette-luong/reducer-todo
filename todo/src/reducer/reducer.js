export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
        return {
            todos:[...state.todos,{item:action.task, completed: false, id:new Date()}]
          };
    case "TOGGLE_DONE":
      return  {
        todos:state.todos.map((todo,id)=> id === action.id ?{...todo,completed:!todo.completed} : todo)
      };
    case "CLEAR_COMPLETED":
        return{
        todos:state.todos.filter((todo)=> todo.id !== action.id)
      };
    default:
      return state;
  }
};
