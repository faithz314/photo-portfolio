//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


function App() {


  return (
    <div>
    <Navbar></Navbar>
      
    <Footer></Footer>
    </div>
  );
}

export default App;
