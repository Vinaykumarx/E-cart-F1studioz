import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Screen1 from './components/Screen1/Screen1';
import Screen2 from "./components/Screen2/Screen2";
import Screen3 from "./components/Screen3/Screen3";
import Screen4 from "./components/Screen4/Screen4";
import Screen5 from "./components/Screen5/Screen5";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Screen1/>} exact />       
            <Route path="/newOrder" element={<Screen2/>} exact />       
            <Route path="/category" element={<Screen3/>} exact />       
            <Route path="/configure" element={<Screen4/>} exact />       
            <Route path="/preview" element={<Screen5/>} exact />       
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
