import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ParticleProvider } from './context/ParticleContext';

import ScrollToTop from './components/common/ScrollToTop';
import AppRoutes from './AppRoutes';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ParticleProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </ParticleProvider>
    </HelmetProvider>
  );
}

export default App;
