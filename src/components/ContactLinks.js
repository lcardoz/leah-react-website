import React from 'react';

const ContactLinks = () => {
  return (
    <div id="contact-link-icons">
      <a id="contact" href="mailto:leahcardoz@gmail.com" target="_blank" rel="noopener noreferrer" alt="email">
        <i class="envelope icon custom-icon"></i> 
      </a>
      <a id="contact" href="https://www.linkedin.com/in/lcardoz/" target="_blank" rel="noopener noreferrer" alt="linkedin-profile">
        <i class="linkedin icon custom-icon"></i> 
      </a>
      <a id="contact" href="https://github.com/lcardoz" target="_blank" rel="noopener noreferrer" alt="github-profile">
        <i class="github icon custom-icon"></i>
      </a>
      <a id="contact" href="https://medium.com/@leahcardoz" target="_blank" rel="noopener noreferrer" alt="medium-blog">
        <i class="medium icon custom-icon"></i>
      </a>
      <a id="contact" href="https://open.spotify.com/user/1227112224?si=PSeESowvQN-TyEfdy3cUpQ&nd=1" target="_blank" rel="noopener noreferrer" alt="spotify-profile">
        <i class="spotify icon custom-icon"></i>
      </a>
    </div>
  )
}

export default ContactLinks;