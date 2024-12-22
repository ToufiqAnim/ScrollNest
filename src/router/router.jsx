import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import PostPage from "../Pages/PostPage";

import WrittingPage from "../Pages/WrittingPage";
import Signin from "../Pages/Signin";
import Signup from "../Pages/signup";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostPage />,
      },
      {
        path: "/write",
        element: <WrittingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);
export default router;
