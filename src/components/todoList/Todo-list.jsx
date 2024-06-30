import React from 'react';
import './Todo.css';
import TodoCreate from './Todo-create';
import TodoFilter from './Todo-filter';
import TodoItem from './Todo-item';
import { taskList } from "./taskList";




const TodoList = () => {
    const [tasks, setTasks] = useState(taskList);
  
    const addTask = () => { 
      alert('add')
    }
  
  
    return (
      <div className="todo">
        <h1>Todo List</h1>
        <TodoCreate addTask={addTask} />
        <div>
          <TodoFilter />
          <div className="task-list">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default TodoList;
