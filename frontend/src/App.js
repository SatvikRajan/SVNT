import React, { useLayoutEffect, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CareersPage from './pages/Carrer';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Services from './pages/Services';
import AdminPage from './pages/AdminPage';
import Loader from './components/Loader';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import Partners from './pages/Partners';
import ScrollToTopButton from './components/ScrollToTopButton';
const LazyHome = React.lazy(() => import('./pages/Home'))
function App() {

  const isAuthenticated = () => {
    return localStorage.getItem('app-user') !== null;
  };

  // PrivateRoute component
  const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };

  const PageLoader = () => {
    return (
      <div className='loader' style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: '#F1FAFF' }}>
        <Loader />
      </div>
    )
  }
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Suspense fallback={<PageLoader />}><MainLayout><LazyHome /></MainLayout></Suspense>} />
          <Route path="contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="partners" element={<MainLayout><Partners /></MainLayout>} />
          <Route path="casestudies" element={<MainLayout><CaseStudies /></MainLayout>} />
          <Route path="careers" element={<MainLayout><CareersPage /></MainLayout>} />
          <Route path="about" element={<MainLayout><About /></MainLayout>} />
          <Route path="services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="register" element={<AdminRegister />} />
          <Route path="admin-main" element={<PrivateRoute element={<AdminPage />} />} />
        </Routes>
      </ScrollToTop>
      <ScrollToTopButton/>
      {/* )} */}
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