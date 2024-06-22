import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '../../pages/Sidebar.jsx';
import AllKeywordsOccurrences from '../../pages/AllKeywordsOccurrences.jsx';
import TrendingJobKeywords from '../../pages/TrendingJobKeywords.jsx';
import KeywordDetails from '../../pages/KeywordDetails.jsx';
import FileDetails from '../../pages/FileDetails.jsx';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Sidebar />}>
            <Route path="trending_job_keywords" element={<TrendingJobKeywords />}>
                <Route index element={<Navigate to="all_keywords" />} />
                <Route path="all_keywords" element={<AllKeywordsOccurrences />} />
                <Route path="all_keywords/keyword" element={<KeywordDetails />} />
                <Route path="all_keywords/keyword/file" element={<FileDetails />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default AppRoutes;
