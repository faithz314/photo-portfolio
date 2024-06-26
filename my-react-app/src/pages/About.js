import React from 'react';
import '../styles/About.css';
import IMG_2390 from '../images/IMG_2390.jpg'
import Contact from '../components/Contact.js';


function About(){
    return(

    <div className= 'about-page'>
    <div className= 'about-content'>
        <div className= 'bio'>
        <h2>HI, MY NAME IS FAITH. </h2>
            <p> I'm a portrait + event photographer based in Houston, TX. I discovered
                photography my first semester of college and found an awesome
                photographer community at the same time. I have been taking photos
                ever since! I find that although folks don't always love getting their pictures
                taken, they tend to find joy in the final result, nonetheless.
            </p>
            <p>
                I love to shoot people, events, cosplays (?? please !!), and other happenings around
                my community. 
            </p>
            <p>
                You can reach me at fz28@rice.edu for any business inquiries or contact me in the box 
                down below!
            </p>
         </div>
        
        <div className = 'headshot'>
            <img src= {IMG_2390} alt= 'headshot' style={{ width: '300px', height: 'auto' }}></img>
        </div>

        <div className = 'box'><Contact></Contact></div>

    </div>
</div>

        
    );
}

export default About;
