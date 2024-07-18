/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizID } from '../../app/redux/slices/quizSlice';
import { ReactComponent as CodeIcon } from '../../assets/code_icon.svg';

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quizID } = useSelector((state) => state.quiz);

  const handleClick = () => {
    dispatch(setQuizID(quiz.id));
    navigate(`/quiz/${quiz.name}/quizdetails`);
  };

  return (
    <div
      onClick={handleClick}
      className='bg-[#bedbb8] p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#a7cf99] cursor-pointer'
    >
      <div className="flex items-start gap-4">
        <CodeIcon className="size-20 rounded-lg object-cover shadow-sm bg-[#b4e9df]" />
        <div>
          <h3 className="text-lg/tight font-medium text-gray-900">{quiz.name}</h3>
          <p className="mt-0.5 text-gray-700">{quiz.description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
