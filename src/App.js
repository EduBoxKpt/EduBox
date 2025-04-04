import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import Notes from './pages/Notes/Note'; 
import QuestionPapers from './pages/QuestionPapers/QuestionPapers';

import About from './pages/About/About';
import ContactUs from './pages/Contact/Contact';




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        
       
        <Route path="/questionpaper" element={<QuestionPapers />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
       
         
       
        
      </Routes>
      
     
      <Footer />
    </Router>
  );
};

export default App;
