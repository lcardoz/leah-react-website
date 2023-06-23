import React from 'react';
import leahPic from '../images/leahpic1.JPG';

const Home = () => {
  return (
    <div id="parent-container">
      <div id="about-me-container">
        <div id ="about-me">
          <p style={{fontSize: "18px"}}>software engineer + concert enthusiast + student always</p>
          <p >~CURRENTLY~</p>
          <p>looking for: full-time web development opportunities</p>
          <p>learning: Redux, Data Structures & Algorithms </p>
          <p>listening to: <a id="listening-to" href="https://open.spotify.com/album/31UtR7w5vJtg8AmBvWAwL5?si=IoTnEC1zQ7Ch6fI-D3NlwA" target="_blank" rel="noopener noreferrer" alt="Space-Heavy-Album">Space Heavy</a> by King Krule</p>
          <p>living in: Brooklyn, NY</p>
        </div>
        <div id="leah-pic-container">
          <img id="leah-pic" src={leahPic} alt="Leah in Antigua" />
        </div>
      </div>
    </div>
  )
}

export default Home;