
import React , { useReducer, useState } from 'react'
import {reducer, initialState} from './reducer/reducer'
import './App.css';
import TodoForm from "./components/TodoForm"
import Todo from "./components/Todo"




function App() {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);


  const onChange = (e) => {
    setTask(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: task });
    setTask("");
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do list</h1>
        <TodoForm
          onSubmit={onSubmit}
          onChange={onChange}
          text={task}
          dispatch={dispatch}
          />
        <Todo
          todos={state.todos}
          dispatch={dispatch}
        />
      </header>        
    </div>
  );
}

export default App;
