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
        <div>
        <nav className = "navigation">

            <Routes>
                <Route path= '/home' element= {<Home/>}/>
                <Route path= '/about' element= {<About/>}/>
                <Route path= '/portfolio' element= {<Portfolio/>}/>

            </Routes>

            <div className= "initials"> FLZ</div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>

        </nav>


            
        </div>
        
    );

}

export default Navbar;