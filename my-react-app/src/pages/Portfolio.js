import React from 'react'
import '../styles/Portfolio.css';
import Aden from '../images/Portraits/DSC_5441.jpg'
import Singer from '../images/Events/DSC_7271.jpg';
import Group from '../images/Groups/180-Officers.jpg';

import {Router, Link, Routes, Route} from 'react-router-dom';


function Portfolio(){
    return(
        <div>
        <div className= "scroll">

            <div className= "title">  
            <h1> MY PORTFOLIO </h1>
            <p> Welcome to my portfolio, where you can find all my pictures! </p>
            </div> 


        <div className= "items"> 
            <div id= 'item'>
                <h1> PORTRAITS </h1>
                <Link to = '/portraits'>
                    <img src= {Aden} alt= 'aden headshot'style={{ width: '400px', height: 'auto' }}></img>
                </Link>
            </div>

            <div id= 'item'>
                <h1> EVENTS </h1>
                <Link to = '/events'>
                    <img src= {Singer} alt= 'aden headshot'style={{ width: '400px', height: 'auto' }}></img>
                </Link>
            </div>


            <div id= 'item'>
                <h1> GROUPS/PUBLISHED </h1>
                <Link to = '/published'>
                    <img src= {Group} alt= 'aden headshot'style={{ width: '400px', height: 'auto' }}></img>
                </Link>           
            </div>

            <div id= 'item'>
            
                <h1> PHOTO COLLECTIONS </h1>
                <Link to = '/collections'>
                    <img src= {Aden} alt= 'aden headshot'style={{ width: '400px', height: 'auto' }}></img>
                </Link>

            </div>
        </div>
        </div>
        </div>



    )

}

export default Portfolio