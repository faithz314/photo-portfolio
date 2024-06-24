import React from 'react'
import '../styles/Portfolio.css';
import Aden from '../images/Portraits/DSC_5441.jpg'


function Portfolio(){
    return(
        <div>
        <div className= "scroll" style ={{width: '100%', height:'1000px'}}>

            
            <h1> MY PORTFOLIO </h1>
            <p> Welcome to my portfolio, where you can find all my pictures! </p>
            
            <h1> PORTRAITS </h1>
            <img src= {Aden} alt= 'aden headshot'style={{ width: '300px', height: 'auto' }}></img>

            <h1> EVENTS </h1>
            <img src ></img>

            <h1> PUBLISHED </h1>
            <img src ></img>

            <h1> COLLECTIONS </h1>
            <img src ></img>
        </div>
        </div>

    )

}

export default Portfolio