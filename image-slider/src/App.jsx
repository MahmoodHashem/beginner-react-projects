
import { useState } from 'react'
import images from './assets/img_urls.js'
import Slider from './components/Slider.jsx'

/**
 * Function representing the main component of the image slider.
 * Manages the current index of the displayed image and provides functions to navigate to the next or previous image.
 * Also allows direct navigation to a specific image by index.
 * Renders the slider component with the current image and navigation buttons.
 */

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="container">
        <Slider images={images} index={currentIndex} next={nextSlide} prev={prevSlide} />
        <div className="pointers">
          {images.map((_, index) => (
            <button
              key={index}
              className={`pointer ${index === currentIndex ? 'active' : ''}`}
              onClick={() => currentImage(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
