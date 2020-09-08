import React, { useState, useReducer } from "react";
// import { reducer , initialState} from '../reducer/reducer'



const Todo = () => {
  const [todo, setToDo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const onInput = (e) => {
    setToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setToDo("");
  };

  return (
    <div className="todolist">
      <div>
        <form>
          <input name="name" type="text" value={todo} onChange={onInput} />
        </form>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO" });
          }}
        >
          Add To do
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_COMPLETED" });
          }}
        >
          Clear completed task
        </button>

        <div className="toggle-task">
          {todos.map((todo, id) => (
            <h3
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              key={todo.id}
              onClick={() => dispatch({ type: "TOGGLE_TODO", id })}
            >
              {todo.item}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
