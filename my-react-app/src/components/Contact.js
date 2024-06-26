import React from 'react';
import './Contact.css';


function Contact(){

    return(

    <div className = 'contact'> 

        <h2>Contact Me! </h2>
        <input type= 'text' placeholder= 'Name'></input>
        <input type= 'text' placeholder= 'Email'></input>
        <input type= 'text' placeholder= 'Inquiry'></input>

    </div>
    );
}

export default Contact;