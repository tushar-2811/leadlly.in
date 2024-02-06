import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home';

import Footer from './Components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Pages/AUTH/Signup2.jsx';
import Contact from './Pages/Contact.jsx';
import Test from './Pages/testing/test.jsx';





export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
