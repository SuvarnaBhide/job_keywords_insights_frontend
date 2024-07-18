/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AllKeywordsOccurrences from '../../components/Keywords/AllKeywordsOccurrences.jsx';
import TrendingJobKeywords from '../../pages/TrendingJobKeywords.jsx';
import KeywordDetails from '../../components/Keywords/KeywordDetails.jsx';
import FileDetails from '../../components/Keywords/FileDetails.jsx';
import DataStorage from '../../pages/DataStorage.jsx';
import AddReadData from '../../components/Data Storage/AddReadData.jsx';
import Quiz from '../../pages/Quiz.jsx';
import Quizzz from '../../components/Quiz/Quizzz.jsx';
import QuizDetails from '../../components/Quiz/QuizDetails.jsx';
import QuizzesArea from '../../components/Quiz/QuizzesArea.jsx';
import AttemptDetails from '../../components/Quiz/AttemptDetails.jsx';
import AttemptInfo from '../../components/Quiz/AttemptInfo.jsx';
import Attempts from '../../components/Quiz/Attempts.jsx';

const AppRoutes = () => (
  <Routes>
    {/* Default route */}
    <Route path="/" element={<Navigate to="/trending_job_keywords" />} />

    {/* Main application layout with Sidebar */}
    <Route path="/" element={<Sidebar />}>
      
      {/* Trending Job Keywords routes */}
      <Route path="trending_job_keywords" element={<TrendingJobKeywords />}>
        <Route index element={<Navigate to="all_keywords" />} />
        <Route path="all_keywords" element={<AllKeywordsOccurrences />} />
        <Route path="all_keywords/:keyword" element={<KeywordDetails />} />
        <Route path="all_keywords/:keyword/file" element={<FileDetails />} />
      </Route>

      {/* <Route path="data_storage" element={<DataStorage />}>
        <Route index element={<Navigate to="add_and_read_data" />} />
        <Route path="add_and_read_data" element={<AddReadData />} />
      </Route> */}

      <Route path="quiz" element={<Quiz />}>

        <Route index element={<Navigate to="quizzes" />} />
        
        <Route path="quizzes" element={<QuizzesArea/>} />
        <Route path=":quiz/quizdetails" element={<QuizDetails/>} />
        <Route path=":quiz/quizzz" element={<Quizzz/>} />

        <Route path="attempts" element={<Attempts />} />
        <Route path="attempts/attemptdetails" element={<AttemptDetails />} />

      </Route>
      
      {/* Fallback route for unmatched paths
      <Route path="*" element={<Navigate to="/" />} /> */}
    </Route>
  </Routes>
);

export default AppRoutes;
