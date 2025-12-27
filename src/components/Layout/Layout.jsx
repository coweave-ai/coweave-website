import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-primary-navy flex flex-col">
      <Navigation />
      <main className="flex-grow" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
