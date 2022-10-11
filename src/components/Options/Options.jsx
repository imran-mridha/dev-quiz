import React from 'react';

const Options = ({ option, handleCorrectAnswer}) => {
  return (
    <div className='  cursor-pointer  my-3 w-full lg:w-9/12 mx-auto py-2 px-4 rounded-lg text-white font-semibold z-0 '>
      <label htmlFor={option}  className=' py-2 px-3 rounded-md mb-3 flex items-center cursor-pointer'>
        <input onChange = {() => handleCorrectAnswer(option)} type="radio" id={option} name="option" /><p className='pl-3 bg-violet-500 hover:bg-violet-900 focus:bg-violet-900 active:bg-violet-700'>{option}</p>
      </label>
    </div>
  );
};

export default Options;