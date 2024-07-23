import App from "../App";
import Example from "../components/Example";
import TodoList from "../components/todoList/Todo-list";
import Home from "../pages/home/Home";
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Counters from "../components/counters/Counters";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Page Not Found</h1>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "todo",
          element: <TodoList />,
        },
        {
          path: "example",
          element: <Example/>,
        },
        {
          path: "counters",
          element: <Counters/>,
        },
      ],
    },
  ]);

  export default router