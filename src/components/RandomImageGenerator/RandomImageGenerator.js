import React from 'react';
import { useState } from 'react';

import './index.css';
import Instagram from '../Instagram/Instagram';

const RandomImageGenerator = () => {
  const [catImageSrc, setCatImageSrc] = useState('');

  const fetchNewCat = async () => {
    try {
      const response = await fetch('https://cataas.com/cat?filter=custom&blur=3');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob(); // Get the image as a blob
      const reader = new FileReader();
      reader.onload = () => {
        setCatImageSrc(reader.result); // Set base64 string as image source
      };
      reader.readAsDataURL(blob); // Convert blob to base64
    } catch (error) {
      console.error('There was a problem fetching the cat image:', error);
    }
  };

  return (
    <div className="main-random-cat-generator-container">
      <h1 className="random-cat-generator-title">If you can't choose let us choose for you! </h1>
      <button onClick={fetchNewCat} className="random-cat-generator-button">Press for a surprise</button>
      {catImageSrc && (
        <Instagram name="lookingToAdopt" image={catImageSrc}/>
      )}
  </div>
  )
}

export default RandomImageGenerator;
