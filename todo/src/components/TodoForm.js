import React from "react";

export default function TodoForm(props) {
  const { onSubmit, onChange, text, dispatch } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} />
        <button>Add Todo</button>
        <button onClick={() => dispatch({ type: "CLEAR_TODO" })}>
          Clear Todo
        </button>
      </form>
    </div>
  );
}
