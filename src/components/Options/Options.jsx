import React from 'react';

const Options = ({option,handleCorrectAnswer}) => {

  // const correctAnswer = option.correctAnswer;
  // console.log(option);

  // const handleCorrectAnswer = id=>{
  //   console.log(id);
  // }
  // console.log(option.ca);
  return (
    <div onClick={()=>handleCorrectAnswer(option)} className='bg-violet-500 hover:bg-violet-900 cursor-pointer my-3 w-9/12 mx-auto py-2 px-4 rounded-lg text-white font-semibold'>
      <input type="radio" name='option' value='option'/>
      <label className='px-3'>{option}</label>
    </div>
  );
};

export default Options;