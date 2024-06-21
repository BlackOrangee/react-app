import React from 'react';

const TodoItem = ({ title, isDone }) => {
    return (
        <div className="task-item">
            <input type="checkbox" checked={isDone} />
            <span>{title}</span>
            <button>Delete</button>
        </div>
    );
}

export default TodoItem;
