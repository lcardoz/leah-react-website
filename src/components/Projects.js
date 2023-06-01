import React from 'react';
import GigPrints from '../images/Gig-Prints-HomePage.png';

const Projects = () => {

  const myProjects = [
    {
      id: 1,
      name: 'Gig Prints',
      image: GigPrints,
      github: 'https://github.com/lcardoz/gig-prints',
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
        3: ''
      },
      info: 'Solo Capstone Project built in 3 weeks',
    },
    // {
    //   id: 2,
    //   name: 'Engine-Ear.',
    //   image: '',
    //   github: '',
    //   vimeo: '',
    //   description: '',
    //   features: {
    //     1: '',
    //     2: '',
    //     3: '',
    //     4: '',
    //   },
    //   tech: {
    //     1: '',
    //     2: '',
    //   },
    //   info: 'Group Project built in 1 week by Leah Cardoz, Justin Woodruff & Henry Wu',
    // },
    // {
    //   id: 3,
    //   name: 'Engine-Ear.',
    //   image: '',
    //   github: '',
    //   vimeo: '',
    //   description: '',
    //   features: {
    //     1: '',
    //     2: '',
    //     3: '',
    //   },
    //   tech: '',
    //   authors: 'Group project built in 1 week by Leah Cardoz & Aaron David',
    // }
  ];


  return (
    <div>Projects coming soon!!!</div>

  )
}

export default Projects;