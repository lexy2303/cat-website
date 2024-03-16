import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Instagram from '../Instagram/Instagram';
import './index.css';

const CatGifs = ({ names }) => {
  const [catGifs, setCatGifs] = useState([]);

  useEffect(() => {
    const fetchCatGifs = async () => {
      try {
        // We define an endpoints array containing the URLs of the three cat GIFs along with their corresponding texts.
        // Added some fontSize and fontColor to the text inside the gifs 
        const endpoints = [
          { url: 'https://cataas.com/cat/gif/says/Hello?fontSize=35&fontColor=white', text: 'Hello' },
          { url: 'https://cataas.com/cat/gif/says/World?fontSize=35&fontColor=white', text: 'World' },
          { url: 'https://cataas.com/cat/gif/says/!?fontSize=35&fontColor=white', text: '!' }
        ];

        const gifs = [];

        for (const endpoint of endpoints) {
          const response = await axios.get(endpoint.url, { responseType: 'blob' });

          const blob = new Blob([response.data], { type: 'image/gif' });
          const gifUrl = await readBlobAsDataURL(blob);
          gifs.push({ gifUrl, text: endpoint.text });
        }

        setCatGifs(gifs);
      } catch (error) {
        console.error('Error fetching cat gifs:', error);
        setCatGifs(null); // Set catGifs to null in case of error
      }
    };
    
    fetchCatGifs();
  }, []); // Empty dependency array ensures this effect runs only once
  // Inside the fetchCatGifs function, we loop through each endpoint, fetch the GIF data sequentially, convert it to a base64-encoded URL, and push it into the gifs array.

  // Function to read blob data as a data URL
  const readBlobAsDataURL = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  return (
    <>
      <h1 className="cat-gifs-title">Or Maybe one of these funny boys is more your type?</h1>
      <div className="cat-gifs-container">
        {Array.isArray(catGifs) ? (
          catGifs.map((cat, index) => (
            <Instagram name={`adopt_${names[index]}`} image={cat.gifUrl} />
          ))): <p>Loading</p>}
      </div>
    </>
  )
}

export default CatGifs;

