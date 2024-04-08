import React from 'react';
import './MyApp.css';
import { MainPage } from './pages/MainPage.jsx';
import { AddPage } from './pages/AddPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = new createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/AddPage', element: <AddPage /> },
]);

export default router;
