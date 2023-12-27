import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
function App() {
  return (
    <>
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
