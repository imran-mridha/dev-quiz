import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Ques from '../Ques/Ques';


const QuizQus = () => {
  const quizQusData = useLoaderData();
  // console.log(quizQusData.data.name);
  const quizQus = quizQusData.data.questions;
  

  return (
    <div>
      
      <h2 className='text-white text-4xl text-center my-10 uppercase'>Quiz Topic : <span className='text-violet-600 font-bold '>{quizQusData.data.name}</span> </h2>
      <h2> </h2>
      {
        quizQus.map(ques => <Ques key = {ques.id} ques = {ques} />)
      }
    </div>
  );
};

export default QuizQus;