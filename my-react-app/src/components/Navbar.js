import React from 'react';
import './Navbar.css';
import {Router, Link, Routes, Route} from 'react-router-dom';
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Home from '../pages/Home'


function Navbar(props){
    // const [DropDown, setDropDown] = useState(false);

    // const toggleDropDown = () => {
    //     setDropDown(!DropDown);
    // }

    //CONST = var prefix!!!

    return(
        <nav className = "navigation">

            <a href = "/" class= "initials"> FLZ</a>

            <Routes>
                <Route path= '/' element= {<Home/>}/>
                <Route path= '/portfolio' element= {<Portfolio/>}/>
                <Route path= '/about' element= {<About/>}/>

            </Routes>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>

            <Link to="/about">About</Link>

        </nav>


                    
    );

}

export default Navbar;