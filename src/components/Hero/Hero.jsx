import React from 'react';
import Lottie from 'lottie-react';
import reader from '../../assets/quiz-program.json'

const Hero = () => {
  return (
    <div>
      <div className=' grid grid-cols-1 lg:grid-cols-2 mx-10 my-10'>
        <div className='flex flex-col  justify-center'>
          <div>
            <h2 className='text-4xl text-white font-semibold uppercase'>WellCome To Dev<span className='text-violet-500'>Quiz</span> </h2>
            <p className='py-5 text-white text-xl'>Dev Quiz provides challenges for several different topics such as React, Javascript, CSS, Git and more. You can test your knowledge directly online.</p>
          </div>
        </div>
        <div className='flex justify-end'>
          <Lottie className='w-96' animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;