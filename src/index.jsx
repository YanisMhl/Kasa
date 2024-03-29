import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import APropos from './pages/A-propos';
import Error from './pages/Error';
import Logement from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/a-propos' element={<APropos />} />
        <Route path="*" element={<Error />} />
        <Route path='/logement/:logementId' element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);