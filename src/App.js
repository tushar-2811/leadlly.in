import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home';
import Courses from './Pages/Courses/Courses.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
