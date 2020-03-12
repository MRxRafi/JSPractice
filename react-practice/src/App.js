import React from 'react';

import TodoList from './todoList/TodoList.jsx';
import './App.css';
import { TASKS } from './mock-tasks';

function App() {
  return (
      <TodoList TASKS={TASKS}/>
  );
}

export default App;
