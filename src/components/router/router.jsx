import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../error/Error";
import Home from "../pages/Home";
import Logo from "../common/welcome/Logo";
import FaithFirst from "../common/welcome/FaithFirst";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FaithFirst />,
  },
  {
    path: "/bnglobal",
    element: <Logo />,
  },
  {
    path: "/home",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
