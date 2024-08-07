import '../styles/Portraits.css'
import React, {useState} from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Rosa from '../images/Portraits/rosa-headshot.jpg'




function Portraits(){ //pics serve as props here ONLY if called in APP
    const pics  = [
        Rosa,
        'https://snworksceo.imgix.net/rce/2e05e61a-e714-4bb7-b71a-6a94f9985443.sized-1000x1000.jpg?w=800',
        'https://via.placeholder.com/600x300?text=Image+3',
        'https://via.placeholder.com/600x300?text=Image+4',
      ];  

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () =>{
        setCurrentIndex((currentIndex +1) % pics.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex-1 + pics.length));
    };



    return(
        <div className= 'portrait-page'>
            <h1> PORTRAITS </h1>


            <div className= 'carousel'>
            <div id= 'button1'>
                    <button onClick= {prevImage}>
                        PREVIOUS
                    </button>

            </div>

            <div id= 'button2'>
            <button onClick= {nextImage}> 
                        NEXT 
                    </button>

            </div>

          


                <img src= {pics[currentIndex]} 
                alt= 'carousel' 
                className= 'each-image' 
                style={{width: 'auto', height: '500px'}}
                onClick= {nextImage}></img>
                
                
            </div>





        </div>
    );

};

export default Portraits;