import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home';

import Footer from './Components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Pages/AUTH/Signup2.jsx';

import Test from './Pages/testing/test.jsx';
import Login from './Pages/AUTH/Login.jsx';
import CourseDetails from './Pages/CourseDetails/CourseDetails.jsx';
import Mentors from './Pages/Mentor/Mentors.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mentors" element={<Mentors />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
