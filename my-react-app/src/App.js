//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  // let component //let is a varibale declariotn
  // switch(window.location.pathname){
  //   case '/home':
  //     component= <Home/>
  //     break
  //   case '/about':
  //     component= <About/>
  //     break
  //   case '/portfolio':
  //     component= <Portfolio/>

  //     break
  //   default:
  //     console.log('error')

  // }

  
  return (
    <div>
    <Navbar></Navbar>
    <Footer></Footer>
    </div>
  );
}

export default App;
