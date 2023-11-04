import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/Manage/List";
import Trash from "../pages/Manage/Trash";
import Star from "../pages/Manage/Star";
import Edit from "../pages/Detail/Edit";
import Statistics from "../pages/Detail/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          { path: "list", element: <List /> },
          { path: "star", element: <Star /> },
          { path: "trash", element: <Trash /> },
        ],
      },
      { path: "*", element: <NotFound /> }, // 都没有命中上面，兜底
    ],
  },
  {
    path: "question",
    element: <QuestionLayout />,
    children: [
      { path: "edit/:id", element: <Edit /> },
      { path: "statistics/:id", element: <Statistics /> },
    ],
  },
]);

export default router;
