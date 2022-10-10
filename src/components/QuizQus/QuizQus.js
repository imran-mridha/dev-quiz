import React from 'react';
import {useLoaderData} from 'react-router-dom';

const QuizQus = () => {
  const quizQusData = useLoaderData();
  const quizQus = quizQusData.data.questions;

  console.log(quizQus)
  return (
    <div>
      <h2>Hellooo</h2>
      {
        quizQus.map(ques => console.log(ques.question))
      }
    </div>
  );
};

export default QuizQus;