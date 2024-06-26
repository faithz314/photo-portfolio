import React from 'react';
import './Navbar.css';
import {Link, Routes, Route} from 'react-router-dom';
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Home from '../pages/Home'
import Portraits from '../pages/Portraits'
import {useState} from 'react';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }



    return(
        <nav className = "navigation">

            <a href = "/" class= "initials"> FLZ</a>

            <Routes>
                <Route path= '/' element= {<Home/>}/>
                <Route path= '/portfolio' element= {<Portfolio/>}/>
                <Route path= '/about' element= {<About/>}/>
                <Route path = '/portraits' element = {<Portraits/>}/>
                
            </Routes>



            <Link to="/">Home</Link>

            <Link to="/portfolio" onMouseEnter= {handleMouseEnter} onMouseLeave= {handleMouseLeave}>Portfolio</Link>

            <Link to="/about">About</Link>


            {isOpen && (
                <ul className= 'dropmenu' onMouseEnter= {handleMouseEnter} onMouseLeave= {handleMouseLeave}>
                    
                    <Link to = '/portraits'> Portraits </Link>
                    <Link to = '/events'> Events </Link>
                    <Link to = '/published'> Published </Link>
                    <Link to = '/collections'> Collections </Link>
                </ul>
            )}





        </nav>


                    
    );

}

export default Navbar;