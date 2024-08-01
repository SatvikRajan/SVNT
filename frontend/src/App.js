import React, { useState, useEffect, useLayoutEffect, Suspense } from 'react';
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
import { SpeedInsights } from "@vercel/speed-insights/react"
const LazyHome = React.lazy(() => import('./pages/Home'))
// const LazyAbout = React.lazy(() => import('./pages/About'))
// const LazyCareer = React.lazy(() => import('./pages/Carrer'))
// const LazyCaseStudeis = React.lazy(() => import('./pages/Home'))
// const LazyContact = React.lazy(() => import('./pages/Contact'))
// const LazyServices = React.lazy(() => import('./pages/Services'))
// const LazyPartners = React.lazy(() => import('./pages/Partners'))
function App() {
  // const useMediaLoader = () => {
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const mediaElements = Array.from(document.querySelectorAll('img, video'));

  //     const checkMediaLoaded = () => {
  //       if (mediaElements.every(el => el.complete || el.readyState === 4)) {
  //         setLoading(false);
  //       }
  //     };

  //     if (mediaElements.length > 0) {
  //       mediaElements.forEach(el => {
  //         if (el.complete || el.readyState === 4) {
  //           return;
  //         }
  //         el.addEventListener('load', checkMediaLoaded);
  //         el.addEventListener('loadeddata', checkMediaLoaded);
  //         el.addEventListener('error', checkMediaLoaded);
  //       });
  //     } else {
  //       setLoading(false);
  //     }

  //     return () => {
  //       mediaElements.forEach(el => {
  //         el.removeEventListener('load', checkMediaLoaded);
  //         el.removeEventListener('loadeddata', checkMediaLoaded);
  //         el.removeEventListener('error', checkMediaLoaded);
  //       });
  //     };
  //   }, []);

  //   return loading;
  // };

  // const isLoading = useMediaLoader();

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
            <Route path="/" element={<React.Suspense fallback={<PageLoader />}><MainLayout><LazyHome /></MainLayout></React.Suspense>} />
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