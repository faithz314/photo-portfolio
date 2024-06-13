import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar(props){
    // const [DropDown, setDropDown] = useState(false);

    // const toggleDropDown = () => {
    //     setDropDown(!DropDown);
    // }

    //CONST = var prefix!!!

    return(
        <nav className = "navigation">
            <div className= "initials"> FLZ</div>

            <a href= '/about'> About </a>
            <a href= '/portfolio'> Portfolio </a>
            <a href= '/home'> Home </a>

        </nav>
        
        
    );

}

export default Navbar;