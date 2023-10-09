import React from 'react';
import './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/Project"  element={<Project />} />
          <Route path="/About"  element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    );
  }

export default App;
