import React from 'react';

const Options = ({ option, handleCorrectAnswer,idx}) => {
  return (
    <div onClick={() => handleCorrectAnswer(option)} className='bg-violet-500 hover:bg-violet-900 cursor-pointer my-3 w-full lg:w-9/12 mx-auto py-2 px-4 rounded-lg text-white font-semibold z-0'>
      <label htmlFor={idx} onClick={() => handleCorrectAnswer(option)} className=' py-2 px-3 rounded-md mb-3 flex items-center cursor-pointer'>
        <input type="radio" id={idx} name="option" /><p className='pl-3'>{option}</p>
      </label>
    </div>
  );
};

export default Options;