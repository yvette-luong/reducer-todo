import React from "react";

export default function TodoForm(props) {
  const { onSubmit, onChange, task, dispatch, todos } = props;
  return (
    <div className="todo-form">
      <div>
        {todos.map((todo, id) => (
          <h3
            style={{ textDecoration: todo.completed ? "line-through" : null }}
            key={todo.id}
            onClick={() => dispatch({ type: "TOGGLE_TODO", id })}
          >
            {todo.item}
          </h3>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" value={task} onChange={onChange} />
        <button>Add Todo</button> &nbsp;
        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED", todos })}>
          Clear Todo
        </button>
      </form>
    </div>
  );
}
