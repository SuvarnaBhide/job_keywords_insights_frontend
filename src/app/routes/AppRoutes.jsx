/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AllKeywordsOccurrences from '../../components/Keywords/AllKeywordsOccurrences.jsx';
import TrendingJobKeywords from '../../pages/TrendingJobKeywords.jsx';
import KeywordDetails from '../../components/Keywords/KeywordDetails.jsx';
import FileDetails from '../../components/Keywords/FileDetails.jsx';

import Quiz from '../../pages/Quiz.jsx';
import Quizzz from '../../components/Quiz/Quizzz.jsx';
import QuizDetails from '../../components/Quiz/QuizDetails.jsx';
import AttemptDetails from '../../components/Quiz/AttemptDetails.jsx';
import Attempts from '../../components/Quiz/Attempts.jsx';
import Payments from '../../pages/Payments.jsx';
import Settings from '../../pages/Settings.jsx';

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

      {/* Quiz routes */}
      <Route path="quiz" element={<Quiz />}>

        <Route index element={<Navigate to="quizdetails" />} />
 
        <Route path="quizdetails" element={<QuizDetails/>} />
        <Route path=":quiz/quizzz" element={<Quizzz/>} />

        <Route path="attempts" element={<Attempts />} />
        <Route path="attempts/attemptdetails" element={<AttemptDetails />} />

      </Route>

      <Route path="payments" element={<Payments />} />
      <Route path="settings" element={<Settings />} />
      
      {/* Fallback route for unmatched paths */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Route>
  </Routes>
);

export default AppRoutes;
