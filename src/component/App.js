// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
import Menu from "./menu/menu";
import Content from './content/content';

function App() {
  return (
    <div className="App font-[roboto] bg-[url('./img/bg-g.svg')] bg-no-repeat bg-cover flex h-screen">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
