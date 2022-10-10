import React, {createContext} from 'react';
import { Outlet,useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const QuizContext = createContext([])

const Main = () => {
  const quizes = useLoaderData();
  return (
    <QuizContext.Provider value = {quizes.data}>
      <Header />
      <Outlet />
      <Footer />
    </QuizContext.Provider>
  );
};

export default Main;