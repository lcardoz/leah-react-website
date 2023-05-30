import React from 'react';
import leahPic4 from '../images/leahpic4.JPG';

const Contact = () => {
  return (
    <div>
       <div id="leah-pic-container-contact">
        <img id="leah-pic" src={leahPic4} alt="Leah in Antigua" />
      </div>
      <div id="contact-link-icons">
        <a id="contact" href="https://www.linkedin.com/in/lcardoz/" target="_blank" rel="noopener noreferrer" alt="linkedin-profile">
          <i class="large linkedin icon"></i> 
        </a>
        <a id="contact" href="https://github.com/lcardoz" target="_blank" rel="noopener noreferrer" alt="github-profile">
          <i class="large github icon"></i>
        </a>
        <a id="contact" href="https://medium.com/@leahcardoz" target="_blank" rel="noopener noreferrer" alt="medium-blog">
          <i class="large medium icon"></i>
        </a>
        <a id="contact" href="https://open.spotify.com/user/1227112224?si=PSeESowvQN-TyEfdy3cUpQ&nd=1" target="_blank" rel="noopener noreferrer" alt="spotify-profile">
          <i class="large spotify icon"></i>
        </a>
      </div>
     
    </div>
  )
}

export default Contact;