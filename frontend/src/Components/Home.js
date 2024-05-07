import  { useState, useEffect } from 'react';
import "../StyleComponents/Home.css"
import image1 from "../Assets/Images/taskmanagement.jpg"
import image2 from "../Assets/Images/taskmanagement2.png"
import image3 from "../Assets/Images/taskmanagement1.png"

const Home=()=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image1 ,
    image2 ,
    image3 ,
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time as needed (in milliseconds)
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    

  
    <div className="Home dark-mode">
      <header className="App-header">
        <h1>WELCOME TO COMPITO</h1>
      </header>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
