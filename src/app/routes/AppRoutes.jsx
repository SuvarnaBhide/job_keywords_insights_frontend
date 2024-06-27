import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AllKeywordsOccurrences from '../../components/Keywords/AllKeywordsOccurrences.jsx';
import TrendingJobKeywords from '../../pages/TrendingJobKeywords.jsx';
import KeywordDetails from '../../components/Keywords/KeywordDetails.jsx';
import FileDetails from '../../components/Keywords/FileDetails.jsx';

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
        <Route path="all_keywords/keyword/file" element={<FileDetails />} />
      </Route>
      
      {/* Fallback route for unmatched paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);

export default AppRoutes;
