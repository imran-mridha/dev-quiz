import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import QuizQus from "../components/QuizQus/QuizQus";
import Statics from "../components/Statics/Statics";
import Main from "../Layoutes/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',

        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/quiz/:quizId',
        loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        element: <QuizQus />
      },
      {
        path: '/statics',
        element: <Statics />,
      },
      {
        path: '/blog',
        element: <Faq />
      }
    ]
  }
])