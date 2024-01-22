import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import A_propos from './pages/A-propos';

import './css/home.css';

console.log(Header);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/a-propos' element={<A_propos />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);