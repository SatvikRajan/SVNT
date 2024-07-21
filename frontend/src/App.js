import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import { CareersPage } from './pages/Carrer';
import CaseStudies from './pages/CaseStudies';
import { About } from './pages/About';
import Services from './pages/Services';
import AdminPage from './pages/AdminPage';
import Loader from './components/Loader';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import Partners from './pages/Partners';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: '#F1FAFF' }}>
          <Loader />
        </div>
      ) : (
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="partners" element={<MainLayout><Partners /></MainLayout>} />
            <Route path="casestudies" element={<MainLayout><CaseStudies /></MainLayout>} />
            <Route path="careers" element={<MainLayout><CareersPage /></MainLayout>} />
            <Route path="about" element={<MainLayout><About /></MainLayout>} />
            <Route path="services" element={<MainLayout><Services /></MainLayout>} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="register" element={<AdminRegister />} />
            <Route path="admin-main" element={<AdminPage />} />
          </Routes>
        </ScrollToTop>
      )}
    </BrowserRouter>
  );
}

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default App;