import React from 'react';
import { toast } from 'react-toastify';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'

const Ques = ({ ques }) => {
  // console.log(ques)
  const correctAnswer = ques.correctAnswer;

  const handleCorrectAnswer = option=>{
    if(option === correctAnswer){
      toast.success('Wow!! Correct Answer', {autoClose: 500})
    }else{
      toast.warning('Opps!! Wrong Answer', {autoClose: 500})
    }
  }
  const showCorrectAnswer =(correctAnswer)=>{
    toast.info(`Coreect Ans:  ${correctAnswer}`,{autoClose: 2000})
  }
  return (
    <div className=' bg-violet-200 text-black my-4 p-10 w-6/12 mx-auto rounded-lg relative'>
      <EyeIcon onClick={()=>showCorrectAnswer(correctAnswer)} className="h-6 w-6 text-violet-500 absolute top-5 right-5"/>
      
      <h2 className='text-2xl mb-10'>{ques.question}</h2>
      <div className=''>
        {
          ques.options.map((option, idx) => <Options key={idx} option={option} handleCorrectAnswer = {handleCorrectAnswer}/>)
        }
      </div>
    </div>
  );
};

export default Ques;