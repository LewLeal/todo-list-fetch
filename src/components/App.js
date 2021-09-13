import React from "react";

import "../App.css";

import TaskInput from "./TaskInput";
import ListTask from "./ListTask";
import ContextProvider from "../context/ContextTask";

const App = () => {
  return (
    <ContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="task-title">
            <h1>Tareas.....</h1>
          </div>
          <div className="main">
            <TaskInput />
            <ListTask />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
