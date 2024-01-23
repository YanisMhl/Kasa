import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import APropos from './pages/A-propos';

import './css/home.css';
import './css/a-propos.css';

console.log(Header);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/a-propos' element={<APropos />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);