import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { RequireAuth, RestrictedAuth } from '@providers/Authentication'
import Layout from '@components/Layout';
import HomePage from '@pages/Home';
import ArchivedPage from '@pages/Archived';
import LoginPage from '@pages/Login';
import NotFoundPage from '@pages/NotFound';

export default function () {
  return (
    <Routes>
      <Route exact path="/" element={
        <RequireAuth>
          <Layout>
            <HomePage />
          </Layout>
        </RequireAuth>
      } />
      <Route exact path="/archived" element={
        <RequireAuth>
          <Layout>
            <ArchivedPage />
          </Layout>
        </RequireAuth>
      } />
      <Route exact path="/login" element={
        <RestrictedAuth>
          <LoginPage />
        </RestrictedAuth>
      } />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};