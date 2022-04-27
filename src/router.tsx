import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ClearPage } from './components/pages/clear';
import { TitlePage } from './components/pages/title';
import { CLEAR_URL, TITLE_URL } from './constants/page-url';

// TODO: 2-2. ゲームURLを入れる

export const Router = () => (
  <Routes>
    <Route path={TITLE_URL} element={<TitlePage />} />
    <Route path={CLEAR_URL} element={<ClearPage />} />
  </Routes>
);
