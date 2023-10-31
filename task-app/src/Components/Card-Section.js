import React from "react";
import image3 from '../images/image-3.PNG';
import image4 from '../images/image-4.PNG'; 
import image5 from '../images/image-5.PNG';
import { useState } from "react";    

function CardSection(){
    const images = [image3, image4, image5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextSlide = () => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    };
  
    const prevSlide = () => {
      const newIndex = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(newIndex);
    };
    return(
        <div className="container">
               <div className="card-wrapper">
               <div className="card-1">
               <p>React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users.</p>
               <div className="image-slider">
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
            <div className="slider-button">
            <button onClick={prevSlide}>{'<'}</button>
            <button onClick={nextSlide}>{'>'}</button>
            </div>
          </div>
            </div> 
            <div className="card-2">
            <p>React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users.</p>
            <img src={image3} alt="Image" />
            </div> 
            <div className="card-3">
            <p>React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users.</p>
            <img src={image4} alt="Image" />
            </div> 
            </div> 
        </div>
    );
}
export default CardSection;