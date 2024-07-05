import React from 'react';
import './Contact.css';
import {useState} from 'react';


function Contact(){
    
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    }); //formData is an object that holds name/email/message properties


    //formData gets updated when the input field changes

    const handleInputChange= (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    }

    const handleSumbit = async (e)=> {

        
    }



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