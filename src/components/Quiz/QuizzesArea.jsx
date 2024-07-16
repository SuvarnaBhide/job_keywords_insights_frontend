/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import QuizCard from './QuizCard';
import { CircularProgress } from '@mui/material';
import { setQuizID } from '../../app/redux/slices/quizSlice';
import { useDispatch } from 'react-redux';

const QuizzesArea = () => {

    const { quizzes } = useSelector((state) => state.quiz);
    const { loading } = useQuizDetails();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setQuizID(null));
    }, [dispatch]);

    return (
        <div className='w-full'>
            <h2 className='text-xl font-bold'>Quizzes</h2>
            {loading ? (
                <div className="flex items-center justify-center mt-6">
                    <CircularProgress />
                </div>
                ) : (
                <div className='mt-6 flex gap-2 flex-wrap'>
                    {quizzes.map((quiz) => (
                    <QuizCard quiz={quiz} key={quiz.id} />
                    ))}
                </div>
                )
            }
        </div>
    );
  };
  
  export default QuizzesArea;