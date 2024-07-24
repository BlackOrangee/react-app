import React, { useState, useCallback } from "react";

const TodoCreate = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(null);

  const addTaskHandler = useCallback(() => {
    if (title.trim().length < 3) {
      return setTitleError("Title is invalid");
    }
    addTask(title);
    setTitle("");
    setTitleError(null);
  }, [title, addTask]);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTaskHandler();
        }}
      />
      <button onClick={addTaskHandler}>add</button>
      {titleError && <div className="error">{titleError}</div>}
    </div>
  );
};

export default TodoCreate;
