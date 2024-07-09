/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import '../../styles/index.css';
import '../../styles/Quizzz.css';
import { CircularProgress } from '@mui/material';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { setQuizScore } from '../../app/redux/slices/quizSlice';

const AttemptDetails = () => {
  const [index, setIndex] = useState(0);
  const { questions, attempts } = useSelector((state) => state.quiz);
  const { loading } = useQuizDetails();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const attemptIndex = searchParams.get('attemptIndex');
  const dispatch = useDispatch();
  const { quizScore } = useSelector((state) => state.quiz);

  useEffect(() => {
    //console.log('attempts: ', attempts, 'attemptIndex: ', attemptIndex);
    if (attemptIndex && attempts[attemptIndex]) {
      dispatch(setQuizScore(attempts[attemptIndex].quizScore));
    }
  }, [attempts, attemptIndex, dispatch]);

  if (!attemptIndex || !attempts || !attempts[attemptIndex]) {
    return <div>Invalid attempt index</div>;
  }

  const attempt = attempts[attemptIndex];

  const handleNextClick = () => {
    if (index < questions.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (loading || questions.length === 0 || quizScore === undefined) {
    return <CircularProgress />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#f0fcff] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px]">
        <div className="flex justify-between">
          <h1>Attempt Details | Score: {quizScore}</h1>
          <h1>
            {index + 1} of {questions.length} questions
          </h1>
        </div>
        <hr className="border-0 h-0.5 bg-[#707070]" />
        <h2 className="text-lg font-medium">
          {index + 1}. {questions[index].content}
        </h2>
        <ul>
          {questions[index].options.map((option) => {
            let className = "flex items-center h-12 px-4 border border-[#686868] rounded-lg mb-5 text-sm cursor-pointer";
            const response = attempt.responses.find(response => response.question_id === questions[index].id);

            if (response && response.option_id === option.id) {
              className += option.is_correct ? ' correct' : ' wrong';
            } else if (option.is_correct) {
              className += ' correct';
            }
            return (
              <li
                key={option.id}
                className={className}
              >
                {option.content}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between mt-4 ">
          <button
            onClick={handlePreviousClick}
            className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-sm w-24 ${
              index === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={index === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-sm w-24 ${
              index === questions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={index === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttemptDetails;
