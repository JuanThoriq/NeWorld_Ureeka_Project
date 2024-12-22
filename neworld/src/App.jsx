// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router";
// import "./App.css";
import { Navbar } from "./components/ui/Navbar";
import { Homepage } from "./components/ui/Homepage";
import { Countriespage } from "./components/ui/Countriespage";
import { Countrydetail } from "./components/ui/Countrydetail";
import { Errorpage } from "./components/ui/Errorpage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="countries" element={<Countriespage />} />
        <Route path="countries/:name" element={<Countrydetail />} />
        <Route path="about" element={<div>About Page</div>} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
