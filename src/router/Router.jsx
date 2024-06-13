// src/Routes/Router.jsx
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from "../pages/Landing"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
