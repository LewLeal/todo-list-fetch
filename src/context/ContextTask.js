import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";

export const ContextTask = createContext();

const ContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const taskAdd = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const taskRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const itemFind = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  const taskEdit = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <ContextTask.Provider
      value={{ tasks,  taskAdd,  taskRemove, itemFind, taskEdit, editItem}}
    >
      {props.children}
    </ContextTask.Provider>
  );
};

export default ContextProvider;
