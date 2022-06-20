// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Suspense fallback={<p>Page is Loading...</p>}>
      <Routes>
        {/* <Menu /> */}
        {/* <Content /> */}

        <Route path="/login" element={<Login />} />

      </Routes>
    </Suspense>
  );
}

export default App;
