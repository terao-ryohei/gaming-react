import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ClearPage } from './components/pages/clear';
import { GamePage } from './components/pages/game';
import { TitlePage } from './components/pages/title';
import { CLEAR_URL, GAME_URL, TITLE_URL } from './constants/page-url';

export const Router = () => (
  <Routes>
    <Route path={TITLE_URL} element={<TitlePage />} />
    <Route path={GAME_URL} element={<GamePage />} />
    <Route path={CLEAR_URL} element={<ClearPage />} />
  </Routes>
);
