import React, { useEffect, useReducer, useState } from "react";
import "./Todo.css";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import { taskList } from "./taskList";
import toDoReducer from "../../reducers/todoReducer";
import { type } from "@testing-library/user-event/dist/type";


const TodoList = () => {
  const [tasks, dispatch] = useReducer(toDoReducer, []);
  const [currentFilter, setCurrentFilter] = useState('All tasks');


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

  const addTask = (title) => { 
    dispatch({
      type: 'ADD_TASK',
      payload: { title }
    });
  }

  const deleteTask = (id) => { 
    dispatch({
      type: 'DELETE_TASK',
      payload: { id }
    })
  }

  const toggleComplete = (id) => { 
    dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: { id }
    })
  }

  const updateTask = (id, newTitle) => { 
    dispatch({
      type: 'UPDATE_TASK',
      payload: { id, newTitle }
    });
  }

  const filterMap = {
    'All tasks': () => true,
    Done: task => task.completed,
    ToDo: task => !task.completed
  }

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
