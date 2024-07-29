import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './routes.jsx';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={Router} />
    <GlobalStyles />
  </>,
);
