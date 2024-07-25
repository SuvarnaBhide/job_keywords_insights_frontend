/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import '../../styles/index.css';
import '../../styles/QuizLive.css';
import { CircularProgress } from '@mui/material';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { setQuizScore } from '../../app/redux/slices/quizSlice';

const AttemptDetails = () => {
  const { questions, attempts, hasFetchedQuestions } = useSelector((state) => state.quiz);
  const { loading, getQuestions } = useQuizDetails();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const attemptIndex = searchParams.get('attemptIndex');

  const dispatch = useDispatch();
  const { quizScore, quizID } = useSelector((state) => state.quiz);

  useEffect(() => {
    if (!hasFetchedQuestions) {
      getQuestions({ quiz_id: attempts[attemptIndex].quiz_id });
    }
  }, [quizID, hasFetchedQuestions, getQuestions, attempts, attemptIndex]);

  useEffect(() => {
    if (attemptIndex && attempts[attemptIndex]) {
      dispatch(setQuizScore(attempts[attemptIndex].quizScore));
    }
  }, [attempts, attemptIndex, dispatch]);

  if (!attemptIndex || !attempts || !attempts[attemptIndex]) {
    return <div>Invalid attempt index</div>;
  }

  const attempt = attempts[attemptIndex];

  if (loading || questions.length === 0 || quizScore === undefined) {
    return <div className='flex justify-center items-center w-full'>
      <CircularProgress />
    </div>
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-[#f0fcff] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px] overflow-y-scroll">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <h1>Attempt Details</h1>
            <div className="border-l-2 border-gray-400 h-6 mx-4"></div>
            <h1>Score: </h1>
            <h1 className='font-semibold text-gray-700 ml-2'> {quizScore}</h1>
          </div>
          <h1>
            {questions.length} questions
          </h1>
        </div>
        <hr className="border-0 h-0.5 bg-[#707070]" />
        {questions.map((question, questionIndex) => {
          const responseForCurrentQuestion = attempt.responses.find(response => response.question_id === question.id);
          const optionOrder = responseForCurrentQuestion ? responseForCurrentQuestion.option_order : [];

          // Create a mapping of optionId to option data
          const optionMap = new Map(question.options.map(option => [option.id, option]));

          return (
            <div key={question.id} className="mb-10">
              <h2 className="text-lg font-medium">
                {questionIndex + 1}. {question.content}
              </h2>
              <ul>
                {/* Display options in the order specified by option_order */}
                {(optionOrder.length > 0 ? optionOrder : question.options.map(option => option.id)).map((optionId) => {
                  const option = optionMap.get(parseInt(optionId));
                  if (!option) return null; // Skip if option not found

                  let className = "flex items-center h-12 px-4 border border-[#686868] rounded-lg mb-5 text-sm cursor-pointer";

                  // Determine if the option is the selected one or correct/wrong
                  const isSelected = responseForCurrentQuestion && responseForCurrentQuestion.option_id === option.id;
                  const isCorrect = option.is_correct;
                  if (isSelected) {
                    className += isCorrect ? ' correct' : ' wrong';
                  } else if (isCorrect) {
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttemptDetails;
