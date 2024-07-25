/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../styles/QuizDetailsDialog.css';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizID } from '../../../app/redux/slices/quizSlice';
import { useNavigate } from 'react-router-dom';

const QuizDetailsRow = ({ label, value }) => {
  return (
    <Stack flexDirection="row" className="detailsdialog__row">
      <div className="detailsdialog__row__key">
        {label}
      </div>
      <div className="detailsdialog__row__value">
        {value}
      </div>
    </Stack>
  );
};

const QuizDetailsDialog = ({ quizDetails, loading }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        dispatch(setQuizID(quizDetails.id));
    
        navigate(`/quiz/${quizDetails.name}/quizlive`);
    };

  return (
    <div className="detailsdialog">
      <div className="detailsdialog__title">
        Quiz Details
      </div>
      {loading ? (
        <div className="detailsdialog__loader">
          <CircularProgress />
        </div>
      ) : (
        <Stack flexDirection="column" className="detailsdialog__content">
          <QuizDetailsRow label="Quiz Name" value={quizDetails.name} />
          <QuizDetailsRow label="Description" value={quizDetails.description} />
          <div className='flex justify-center items-center mt-5'>
            <button
              onClick={handleButtonClick}
              className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 rounded text-sm w-24`}
            >
              Take Quiz
            </button>
          </div>
        </Stack>
      )}
    </div>
  );
};

export default QuizDetailsDialog;
