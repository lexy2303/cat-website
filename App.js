import React from 'react';
import CatImages from './components/CatImages/CatImages';
import RandomCatWithFilter from './components/RandomCatWithFilter/RandomCatWithFilter';
import CatGifs from './components/CatGifs/CatGifs';
import RandomImageGenerator from './components/RandomImageGenerator/RandomImageGenerator';
import './App.css';

const App = () => {
  const names = ["Honey", "Penny", "Andy", "Charlie", "Bobby", "Daisy", "Poppy", "Nacho", "Oreo", "Kiwi"];

  return (
    <div className="app">
      <div className="main-container">
        <div className="container">
          <h1>Animal Home Bulgaria</h1>
          <p>"Animal Hope Bulgaria" is a foundation created by volunteers united by a common cause - to actively help homeless animals.</p>
          <a href="#">Learn more</a>
        </div>
        <div className="blank"></div>
        <div className="container cat-images-container">
          <CatImages names={names}/>
        </div>
        <div className="container">
          <RandomImageGenerator />
        </div>
        <div className="blank"></div>
        <div className="container cat-images-container">
          <CatGifs names={names} />
        </div>
        <div className="container">
          <h1>Have some fun and don't forget to adopt, not shop! </h1>
          <RandomCatWithFilter /> 
        </div>
      </div>
    </div>
  )
}

export default App;
