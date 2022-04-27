import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router';
import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
