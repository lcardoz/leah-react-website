import React from "react";
import leahPic from "../images/leahpic1.JPG";

const Home = () => {
  return (
    <div>
      <div id="about-me-container">
        <div id="about-me">
          <p style={{ fontSize: "18px" }}>
            <i>"a pleasure to have in class"</i>
          </p>
          <p>~CURRENTLY~</p>
          <p>seeking: a new gig!</p>
          <p>living in: Brooklyn, NY</p>
          <p>
            listening to:{" "}
            <a
              id="listening-to"
              href="https://open.spotify.com/album/2JdE3ilolUGhsNkW1oQfvf?si=43mZyxYjTDeUm9_FC_L_uw"
              target="_blank"
              rel="noopener noreferrer"
              alt="Night-Reign-Album"
            >
              Night Reign
            </a>{" "}
            by Arooj Aftab
          </p>
          <p>reading: Walking in Clear Water in a Pool Painted Black by Cookie Mueller</p>
        </div>
      </div>
      <div id="leah-pic-container">
        <img id="leah-pic" src={leahPic} alt="Leah in Antigua" />
      </div>
    </div>
  );
};

export default Home;
