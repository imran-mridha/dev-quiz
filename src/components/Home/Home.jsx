import React from 'react';
import Lottie from 'lottie-react'
import reader from '../../assets/quiz-program.json'

const Home = () => {
  return (
    <div>
      <h1>This Is Home</h1>
      <Lottie animationData={reader} loop={true} />
    </div>
  );
};

export default Home;