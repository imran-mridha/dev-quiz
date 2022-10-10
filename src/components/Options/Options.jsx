import React from 'react';

const Options = ({option,handleCorrectAnswer}) => {
  return (
    <div onClick={()=>handleCorrectAnswer(option)} className='bg-violet-500 hover:bg-violet-900 cursor-pointer my-3 w-full lg:w-9/12 mx-auto py-2 px-4 rounded-lg text-white font-semibold z-0'>
      <input className='cursor-pointer' type="radio" id='option' name='option' value='option'/>
      <label  className='px-3 cursor-pointer'>{option}</label>
    </div>
  );
};

export default Options;