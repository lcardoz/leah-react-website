import React from 'react';
import leahPic from '../images/leahpic1.JPG';

const Home = () => {
  return (
    <>
      <div id="about-me-container">
        <div id ="about-me">
          <p style={{fontSize: "18px"}}>software engineer + concert enthusiast + student always</p>
          <p >~CURRENTLY~</p>
          <p>looking for: frontend or fullstack web development opportunities</p>
          <p>listening to: <a id="listening-to" href="https://open.spotify.com/album/4FR8Z6TvIsC56NLyNomNRE?si=5zkRDp48T-OWHAAyrIAx9g" target="_blank" rel="noopener noreferrer" alt="Stop-Making-Sense-Album">Stop Making Sense (Live)</a> by Talking Heads</p>
          <p>living in: Brooklyn, NY</p>
        </div>
      </div>
      <div id="leah-pic-container">
        <img id="leah-pic" src={leahPic} alt="Leah in Antigua" />
      </div>
    </>
  )
}

export default Home;