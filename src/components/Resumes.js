import React from 'react';
import ResumeStyled from "../Leah-Cardoz-Resume-styled.pdf"
import ResumeATS from "../Leah-Cardoz-Resume-ATS.pdf"

const Resumes = () => {
  return (
    <>
      <div id="card-container">
        <div class="ui cards">
          <div class="ui card">
            <div class="image">
              <iframe src={ResumeStyled} width="100%" height="450px" title="Resume-Styled"></iframe>
            </div>
            <div class="content" style={{textAlign: 'center'}}>
              <a style={{color: '#3B95E3'}} href={ResumeStyled} target="_blank" rel="noopener noreferrer">
                <i class="eye icon"></i>
                Human-Friendly Resume
              </a>
            </div>
          </div>
          <div class="ui card">
            <div class="image">
              <iframe src={ResumeATS} width="100%" height="450px" title="Resume-Styled"></iframe>
            </div>
            <div class="content" style={{textAlign: 'center'}}>
              <a style={{color: '#3B95E3'}} href={ResumeATS} target="_blank" rel="noopener noreferrer">
                <i class="desktop icon"></i>
                ATS-Friendly Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resumes;