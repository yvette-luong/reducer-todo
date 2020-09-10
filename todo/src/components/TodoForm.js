import React, { useState, useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducer/reducer";

function TodoForm() {
  const [todo, setToDo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: "ADD_TODO", payload: todo });
    setToDo("");
  };

  return (
    <div className="todoform">
      <div className="wrapper">
        <div className="form-input">
          <input
            name="name"
            type="text"
            value={todo}
            onChange={handleInput}
          ></input>
          <div>
            <button className="add" onClick={handleSubmit}>
              Add to List
            </button> &nbsp;
            <button
              className="clear"
              onClick={() => {
                dispatch({ type: "CLEAR_COMPLETED" });
              }}
            >
              Clear Completed Task
            </button>
          </div>
        </div>

        <div className="tasks">
          {state.map((task) => {
            return (
              <div
                className="task"
                style={task.done ? { textDecoration: "line-through" } : null}
                onClick={() => {
                  dispatch({ type: "TOGGLE_DONE", id: task.id });
                }}
              >
                {task.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
