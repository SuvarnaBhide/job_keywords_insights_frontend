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

      <Route path="data_storage" element={<DataStorage />}>
        <Route index element={<Navigate to="add_and_read_data" />} />
        <Route path="add_and_read_data" element={<AddReadData />} />
      </Route>

      <Route path="quiz" element={<Quiz />}>
        <Route index element={<Navigate to="quizzz" />} />
        <Route path="quizzz" element={<Quizzz/>} />
      </Route>
      
      {/* Fallback route for unmatched paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);

export default AppRoutes;
