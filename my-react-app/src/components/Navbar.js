import React from 'react';
import './Navbar.css';


function Navbar(){
    return(
        <div className = "navigation">
            <div className= "initials"> FLZ</div>

            <a href= '/about'> Home </a>
            <a href= '/portfolio'> Portfolio </a>
            <a href= '/Resume'> About </a>

        </div>
        
        
    );

}

export default Navbar;