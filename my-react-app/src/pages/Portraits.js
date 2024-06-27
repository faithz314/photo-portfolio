import '../styles/Portraits.css'
import React, {useState} from 'react';





function Portraits({pics}){ //pics serve as props

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
                <img src= {pics[0]} alt= 'image carousel' className= 'each-image'></img>
                <div className= 'button'>
                    <button onClick= {prevImage}>Previous</button>
                    <button onClick= {nextImage}>Mext</button>

                </div>

            </div>





        </div>
    );

};

export default Portraits;