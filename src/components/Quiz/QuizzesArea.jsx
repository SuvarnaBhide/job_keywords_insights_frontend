/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import QuizCard from './QuizCard';
import { CircularProgress } from '@mui/material';

const QuizzesArea = () => {

    const { quizzes } = useSelector((state) => state.quiz);
    let { loading } = useQuizDetails();

    loading = true;

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