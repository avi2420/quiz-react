import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import QuizCategories from './components/QuizCategories';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Header from './components/Header'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<QuizCategories />} />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
