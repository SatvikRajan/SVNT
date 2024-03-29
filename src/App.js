import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import { CareersPage } from './pages/Carrer';
import { About } from './pages/About';
import Services from './pages/Services';
function App() {
  return (
    <>
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="careers" element={<CareersPage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
