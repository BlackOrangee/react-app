import React from 'react';
import './Todo.css';
import TodoCreate from './Todo-create';
import TodoFilter from './Todo-filter';
import TodoItem from './Todo-item';

const TodoList = () => {
    return (
        <div className="todo">
            <h1>TodoList</h1>

            <TodoCreate />

            <div>
                <TodoFilter />

                <div className="task-list">
                    <TodoItem title="Task 1" isDone={true} />
                    <TodoItem title="Task 2" isDone={false} />
                    <TodoItem title="Task 3" isDone={false} />
                </div>
            </div>
        </div>
    );
}

export default TodoList;
