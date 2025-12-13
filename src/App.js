//import different pages 
import Header from "./pages/component/header";
import WelcomePage from "./pages/welcome_page";
import Home from "./pages/home";
import About from "./pages/about_page";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      {/* Transition from one page to another */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;

