/* eslint-disable no-unused-vars */
import React , { useEffect } from 'react';
import '../../styles/index.css';
import '../../styles/QuizType.css';
import AttemptInfo from './AttemptInfo';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const QuizType = () => {
  const { quizzes, quizID, hasFetchedAttempts } = useSelector((state) => state.quiz);
  const { getAttempts, loading } = useQuizDetails();
  const navigate = useNavigate();

  useEffect(() => {
    if (quizID && !hasFetchedAttempts) {
      getAttempts({ quiz_id: quizID });
    }
  }, [quizID, hasFetchedAttempts, getAttempts]);

  const newQuizTab = () => {

    const quiz = quizzes.find(quiz => quiz.id === quizID);
    const quizName = quiz ? quiz.name : null;

    navigate(`/quiz/${quizName}/quizzz`);
  };

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-7 lg:grid-cols-2 lg:gap-x-16">
          <div className="max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <div
              onClick={newQuizTab}
              className={`bg-[#1890D4] cursor-pointer hover:bg-[#3183b2] text-white font-semibold py-3 px-12 rounded text-[12px] w-fit ${false? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1890D4]'}`}
            >
              Start A New Quiz
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizType;
