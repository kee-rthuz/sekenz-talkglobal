import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Countries from './pages/Countries';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (

    <Router>
      <Navbar/>
      {/* <Footer /> */}
      <Routes>

        <Route path="/courses" element={<Courses/>} />
        <Route path="/countries" element={<Countries/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home/>} />

      </Routes>
      <Footer />

    </Router>
  
  );
}

export default App;
