import React, { useContext } from "react";
import { ContextTask } from "../context/ContextTask";
import Task from "./Task";

const ListTask = () => {
  const { tasks } = useContext(ContextTask);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">Ninguna tarea por ahora!!!</div>
      )}
    </div>
  );
};

export default ListTask;
