import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import NavMenu from "../Components/Shared/NavMenu";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/navbar',
        element: <NavMenu></NavMenu>
      }
    ]
  }
])