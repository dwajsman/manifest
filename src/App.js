// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
import Content from './content/content';
import Menu from "./menu/menu";

function App() {
  return (
    <div className="App font-[roboto] bg-[url('./img/bg-g.svg')] bg-no-repeat bg-cover flex h-screen">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
