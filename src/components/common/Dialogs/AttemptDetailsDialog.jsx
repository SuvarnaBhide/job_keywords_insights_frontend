/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../styles/QuizDetailsDialog.css';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizID } from '../../../app/redux/slices/quizSlice';
import { useNavigate } from 'react-router-dom';

const AttemptDetailsRow = ({ label, value }) => {
  return (
    <Stack flexDirection="row" className="detailsdialog__row">
      <div className="detailsdialog__row__key text-[15px]">
        {label}
      </div>
      <div className="detailsdialog__row__value text-[15px]">
        {value}
      </div>
    </Stack>
  );
};

const AttemptDetailsDialog = ({ attemptDetails, loading, attemptIndex }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/quiz/attempts/attemptdetails?attemptIndex=${attemptIndex}`);
    };

  return (
    <div className="detailsdialog">
      <div className="detailsdialog__title text-[20px]">
        Attempt Details
      </div>
      {loading ? (
        <div className="detailsdialog__loader">
          <CircularProgress />
        </div>
      ) : (
        <Stack flexDirection="column" className="detailsdialog__content">
          <AttemptDetailsRow label="Quiz Name" value={attemptDetails.quizName} />
          <AttemptDetailsRow label="Score" value={attemptDetails.quizScore} />
          {/* <AttemptDetailsRow label="Total Questions" value={quizDetails.totalQuestions} />
          <AttemptDetailsRow label="Total Time" value={quizDetails.totalTime} />
          <AttemptDetailsRow
            label="Max Score"
            value={quizDetails.maxScore}
          /> */}
          <div className='flex justify-center items-center mt-5'>
            <button
              onClick={handleButtonClick}
              className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-sm w-fit`}
            >
              View Score Details
            </button>
          </div>
        </Stack>
      )}
    </div>
  );
};

export default AttemptDetailsDialog;
