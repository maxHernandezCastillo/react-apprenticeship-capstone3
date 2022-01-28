import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '@pages/Home';
import ArchivedPage from '@pages/Archived';
import LoginPage from '@pages/Login';
import NotFoundPage from '@pages/NotFound';

export default function () {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/archived" element={<ArchivedPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};