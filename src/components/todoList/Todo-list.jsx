import React, { useEffect, useReducer, useState, useMemo, useCallback } from "react";
import "./Todo.css";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import { taskList } from "./taskList";
import toDoReducer from "../../reducers/todoReducer";
import { actions } from "../../reducers/todoReducer";

const initTasks = () => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : taskList;
}

const TodoList = () => {
  const [tasks, dispatch] = useReducer(toDoReducer, initTasks());
  const [currentFilter, setCurrentFilter] = useState('All');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    dispatch({
      type: 'SET_TASKS',
      payload: { tasks: storedTasks ? JSON.parse(storedTasks) : taskList }
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((title) => {
    dispatch({ type: actions.ADD_TASK, payload: { title } });
  }, []);
  const deleteTask = useCallback((id) => {
    dispatch({ type: actions.DELETE_TASK, payload: { id } });
  }, []);
  const toggleComplete = useCallback((id) => {
    dispatch({ type: actions.TOGGLE_COMPLETE, payload: { id } });
  }, []);

  const updateTask = useCallback((id, newTitle) => {
    dispatch({ type: actions.UPDATE_TASK, payload: { id, newTitle } });
  }, []);

  const filterMap = useMemo(() => ({
    All: () => true,
    Todo: task => !task.completed,
    Done: task => task.completed,
  }), []);

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <TodoCreate addTask={addTask} />
      <div>
        <TodoFilter
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
          filterMap={filterMap}
        />
        <div className="task-list">
          {tasks.filter(filterMap[currentFilter]).map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              updateTask={updateTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
