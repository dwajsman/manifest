// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
import Content from './component/content/content.jsx';
import Menu from "./component/menu/menu.jsx";

function App() {
  return (
    <div className="App font-[roboto] bg-[url('./img/bg-g.svg')] bg-no-repeat bg-cover flex h-screen">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
