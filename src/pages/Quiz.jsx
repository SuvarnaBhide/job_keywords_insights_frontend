/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
// import '../styles/Quiz.css';
import CustomTabs from '../components/common/Tabs/CustomTabs';

const Quiz = () => {

  const tabs = [
    { tabName: 'Quizzes' },
    { tabName: 'QuizDetails' },
    { tabName: 'AttemptDetails' },
    { tabName: 'Quizzz' }
  ];

  return (
    <>
      <Box className="w-full px-7">
        <CustomTabs tabs={tabs} />
        <Box className="w-full h-[calc(100%-70px)]">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Quiz;
