import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const RandomCatWithFilter = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const fetchCatWithFilter = async () => {
    try {
      const response = await axios.get(`https://cataas.com/cat?filter=custom&r=${red}&g=${green}&b=${blue}`, { responseType: 'arraybuffer' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } else {
        throw new Error(`Failed to fetch cat image: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  useEffect(() => {
    fetchCatWithFilter();
  }, []);

  const handleColorChange = () => {
    fetchCatWithFilter();
  };

  return (
    <div>
      <div>
        <label htmlFor="red">Red:</label>
        <input 
          type="range" 
          id="red" 
          min="0" 
          max="255" 
          value={red} 
          onChange={(e) => setRed(e.target.value)} 
        />
        {red}
      </div>
      <div>
        <label htmlFor="green">Green:</label>
        <input 
          type="range" 
          id="green" 
          min="0" 
          max="255" 
          value={green} 
          onChange={(e) => setGreen(e.target.value)} 
        />
        {green}
      </div>
      <div>
        <label htmlFor="blue">Blue:</label>
        <input 
          type="range" 
          id="blue" 
          min="0" 
          max="255" 
          value={blue} 
          onChange={(e) => setBlue(e.target.value)} 
        />
        {blue}
      </div>
      <div>
        <button className="cat-with-filter-button" onClick={handleColorChange}>Apply Filter</button>
      </div>
      <div className="cat-with-filter-box">
        {imageUrl && <img src={imageUrl} alt="Random Cat" className="cat-with-filter-img" />}
      </div>
    </div>
  );
};

export default RandomCatWithFilter;
