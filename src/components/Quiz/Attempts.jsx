/* eslint-disable no-unused-vars */
import React , { useEffect } from 'react';
import '../../styles/index.css';
import '../../styles/QuizType.css';
import AttemptInfo from './AttemptInfo';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { setHasFetchedQuestions } from '../../app/redux/slices/quizSlice';

const Attempts = () => {
  const { attempts, quizID, hasFetchedAttempts } = useSelector((state) => state.quiz);
  const { getAttempts, loading } = useQuizDetails();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHasFetchedQuestions(false));

    if (!hasFetchedAttempts) {
      getAttempts();
    }
  }, [hasFetchedAttempts, getAttempts, dispatch]);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-7 lg:grid-cols-2 lg:gap-x-16">
          <h1 className="text-2xl font-semibold">Previous Attempts</h1>

          {
            loading ? (
              <div className="flex justify-center items-center">
                <CircularProgress />
              </div>
            ) : attempts && attempts.length > 0 ? (
              <div className="flex flex-row flex-wrap gap-4">
                {attempts.map((attempt, attemptIndex) => (
                  <AttemptInfo key={attempt.id} attempt={attempt} attemptIndex={attemptIndex} loading={loading}/>
                ))}
              </div>
            ) : (
              <div>No previous attempts</div>
            )
          } 
        </div>
      </div>
    </section>
  );
};

export default Attempts;
