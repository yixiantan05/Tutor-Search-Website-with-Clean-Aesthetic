import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import FreeTestPapers from './pages/FreeTestPapers';
import TutorLogin from './pages/TutorLogin';
import ParentLogin from './pages/ParentLogin';
import { ThemeProvider } from './components/ThemeContext';
export function App() {
  return <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/free-test-papers" element={<FreeTestPapers />} />
            <Route path="/tutor-login" element={<TutorLogin />} />
            <Route path="/parent-login" element={<ParentLogin />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>;
}