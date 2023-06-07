import React, {useState} from 'react';
import ResumeStyled from "../resumes/Leah_Cardoz_Resume_Styled.pdf"
import ResumeATS from "../resumes/Leah_Cardoz_Resume_ATS.pdf"

const Resumes = () => {

  //create array of 2 cards and map through, so that hover effect is per card

//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const hoveredDiv = {
//   backgroundColor: isHovered ? '#f2f2f2' : 'white',
//   textAlign: 'center', 
//   fontWeight: isHovered ? "800" : "700",
// };

  return (
    <div>
      <div id="resumes-container">
        <div class="ui cards">
          <div class="ui card">
            <div class="image">
              <iframe src={ResumeStyled} width="100%" height="430px" title="Resume-Styled"></iframe>
            </div>
            {/* <div class="content" style={hoveredDiv} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> */}
            <div class="content">
              <a style={{color: '#3B95E3'}} href={ResumeStyled} target="_blank" rel="noopener noreferrer">
                <i class="eye icon"></i>
                Human-Friendly Resume
              </a>
            </div>
          </div>
          <div class="ui card">
            <div class="image">
              <iframe src={ResumeATS} width="100%" height="430px" title="Resume-Styled"></iframe>
            </div>
            {/* <div class="content" style={hoveredDiv} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> */}
            <div class="content">
              <a style={{color: '#3B95E3'}} href={ResumeATS} target="_blank" rel="noopener noreferrer">
                <i class="desktop icon"></i>
                ATS-Friendly Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumes;