import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home';

import Footer from './Components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
