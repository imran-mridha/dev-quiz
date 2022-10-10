import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../Layoutes/Main";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Main />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Home />
    },
    {
      path: '/home',
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Home />
    }
  ]
 }
])