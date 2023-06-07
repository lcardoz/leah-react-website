import React, {useState} from 'react';
import ResumeStyled from "../resumes/Leah_Cardoz_Resume_Styled.pdf";
import ResumeATS from "../resumes/Leah_Cardoz_Resume_ATS.pdf";
import {Button} from 'semantic-ui-react';

const Resumes = () => {

  const myResumes = [
    {
      name: "Human-Friendly Resume",
      pdf: ResumeStyled,
      icon: "eye icon"
    },
    {
      name: "ATS-Friendly Resume",
      pdf: ResumeATS,
      icon: "desktop icon"
    }
  ]

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <>
      <div id="resumes-container">
        {myResumes.map((resume, index) => (
          <div class="ui card" key={index} style={{margin: 0, marginRight: "10px", marginLeft: "10px"}}>
            <div class="image">
              <iframe src={resume.pdf} width="100%" height="430px" title={resume.name}></iframe>
            </div>
            <div class="content" style={{textAlign: 'center'}} >
              <Button
                key={index}
                style={{
                  color: 'white',
                  backgroundColor: isHovered === index ? '#1f70c0' : '#3B95E3',
                  fontWeight: isHovered === index ? "800" : "700",
                }} 
                onMouseEnter={() => handleMouseEnter(index)} 
                onMouseLeave={handleMouseLeave}
                href={resume.pdf} target="_blank" rel="noopener noreferrer"
              >
                <i style={{color: 'white', opacity: '1'}} class={resume.icon}></i>{resume.name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Resumes;