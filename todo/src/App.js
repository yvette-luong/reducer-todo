import React from 'react';
import './App.css';
import Todo from "./components/ToDolist"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do list</h1>
        <Todo/>
      </header>
    </div>
  );
}

export default App;
