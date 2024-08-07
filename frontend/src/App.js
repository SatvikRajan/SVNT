import React, { useLayoutEffect, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contact from './pages/Contact';
// import Home from './pages/Home';
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
const LazyHome = React.lazy(() => import('./pages/Home'))
function App() {

  const PageLoader = () => {
    return (
      <div className='loader' style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: '#F1FAFF' }}>
        <Loader />
      </div>
    )
  }
  return (
    <BrowserRouter>
      {/* {isLoading ? <PageLoader /> : ( */}
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
            <Route path="admin-main" element={<AdminPage />} />
          </Routes>
        </ScrollToTop>
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