import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import ProjectDetails from "../Components/Pages/Projects/ProjectDetails";
import Projects from "../Components/Pages/Projects/Projects";
import Skills from "../Components/Pages/Skills/Skills";
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
      },
      {
        path: '/project/:id',
        loader: ({ params }) => fetch(`https://shourovr82-server.vercel.app/project/${params.id}`),
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      }
    ]
  }
])