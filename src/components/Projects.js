import React from 'react';
import GigPrints from '../images/Gig-Prints-HomePage.png';
import EngineEar from '../images/Engine-Ear-HomePage.png';
import { Card, Image } from 'semantic-ui-react';

const Projects = () => {

  const myProjects = [
    {
      id: 1,
      name: 'Gig Prints',
      image: GigPrints,
      github: {
        1: 'https://github.com/lcardoz/gig-prints',
      },
      vimeo: 'https://vimeo.com/798881890',
      description: 'A hub for bands and poster designers to connect and create concert posters together',
      features: {
        1: 'Utilized React and Rails to facilitate and harness CRUD actions for three models.',
        2: 'Implemented authentication and authorization using encryption and user sessions.',
        3: 'Incorporated react-router client-side routes and uniform styling with Semantic UI.',
        4: 'Compiled API from scratch leveraging foreign keys for the joiner poster model.',
      },
      tech: {
        1: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
        2: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
      },
      info: 'Solo Capstone Project built in 3 weeks',
    },
    {
      id: 2,
      name: 'Engine-Ear.',
      image: EngineEar,
      github: {
        1: 'https://github.com/hhw67865/Engine-ear', 
      },
      vimeo: 'https://vimeo.com/799307351',
      description: 'A social media app solely for software engineers to interact, network, and post content',
      features: {
        1: 'Integrated a user-friendly React interface with a Ruby Rails authenticated backend.',
        2: 'Utilized six models via ActiveRecord including a self join table with user alias ids.',
        3: 'Strengthened signup and login security with hashing, salting, and bcrypt.',
        4: 'Created a feature to filter content by tags such as job postings, projects, and blogs.',
      },
      tech: {
        1: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
        2: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
      },
      info: 'Group Project built in 1 week by Leah Cardoz, Justin Woodruff & Henry Wu',
    },
    {
      id: 3,
      name: 'The Archive',
      image: '',
      github: {
       1: 'https://github.com/ajdavid128/phase-3-group-project-front-end-react',
       2: 'https://github.com/ajdavid128/phase-3-sinatra-react-project',
      },
      vimeo: 'https://vimeo.com/799986630',
      description: 'An app where users can showcase & submit their favorite screenprint artists and prints',
      features: {
        1: 'Built frontend with React and backend with Ruby Sinatra to demonstrate full CRUD.',
        2: 'Engineered RESTful Routing by leveraging ActiveRecord associations for methods.',
        3: 'Elevated frontend styling with CSS including hover-over effects and timed slideshow.',
      },
      tech:  {
        1: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
        2: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg',
      },
      authors: 'Group project built in 1 week by Leah Cardoz & Aaron David',
    }
  ];




  return (
    // <div>Projects coming soon!!!</div>
    <>
      <Card.Group id="project-cards-container">
        {myProjects.map(project => (
          <Card key={project.id}>
            <Image src={project.image} wrapped ui={false} />
            <Card.Content className="content-container">
              <Card.Header>{project.name}</Card.Header>
              <Card.Description>
                {project.description}
              </Card.Description>
            </Card.Content>
            <Card.Content id="tech-icons-container">
              <Image className="tech-icons" src={project.tech[1]} />
              <Image className="tech-icons" src={project.tech[2]} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  )
}

export default Projects;