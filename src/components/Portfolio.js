import React, {useState} from 'react';
import GigPrints from '../images/Gig-Prints-HomePage.png';
import EngineEar from '../images/Engine-Ear-HomePage.png';
import TheArchive from '../images/The-Archive-HomePage.png';
import {Card, Image, Modal, Button, Header} from 'semantic-ui-react';

const Portfolio = () => {
	
	const myProjects = [
		{
			id: 1,
			name: 'Gig Prints',
			image: GigPrints,
			github: ['https://github.com/lcardoz/gig-prints'],
			vimeo: 'https://vimeo.com/798881890',
			description: 'A hub for bands and poster designers to connect and create concert posters together',
			features: [
				'Utilized React and Rails to facilitate and harness CRUD actions for three models.',
				'Implemented authentication and authorization using encryption and user sessions.',
				'Incorporated react-router client-side routes and uniform styling with Semantic UI.',
				'Compiled API from scratch leveraging foreign keys for the joiner poster model.',
			],
			tech: {
				frontend: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
				backend: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
			},
			info: 'Solo Capstone Project built in 3 weeks',
		},
		{
			id: 2,
			name: 'Engine-Ear.',
			image: EngineEar,
			github: ['https://github.com/hhw67865/Engine-ear'],
			vimeo: 'https://vimeo.com/799307351',
			description: 'A social media app solely for software engineers to interact, network, and post content',
			features: [
				'Integrated a user-friendly React interface with a Ruby Rails authenticated backend.',
				'Utilized six models via ActiveRecord including a self join table with user alias ids.',
				'Strengthened signup and login security with hashing, salting, and bcrypt.',
				'Created a feature to filter content by tags such as job postings, projects, and blogs.',
			],
			tech: {
				frontend: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
				backend: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
			},
			info: 'Group Project built in 1 week by Leah Cardoz, Justin Woodruff & Henry Wu',
		},
		{
			id: 3,
			name: 'The Archive',
			image: TheArchive,
			github: [
				'https://github.com/ajdavid128/phase-3-group-project-front-end-react',
				'https://github.com/ajdavid128/phase-3-sinatra-react-project',
			],
			vimeo: 'https://vimeo.com/799986630',
			description: 'An app where users can showcase and submit their favorite screenprint artists and prints',
			features: [
				'Built frontend with React and backend with Ruby Sinatra to demonstrate full CRUD.',
				'Engineered RESTful Routing by leveraging ActiveRecord associations for methods.',
				'Elevated frontend styling with CSS including hover-over effects and timed slideshow.',
			],
			tech: {
				frontend: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
				backend: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg',
			},
			info: 'Group project built in 1 week by Leah Cardoz & Aaron David',
		},
	];

	const [openModal, setOpenModal] = useState(Array(myProjects.length).fill(false));

	const handleOpenModal = (index) => {
		const newOpenModal = [...openModal];
		newOpenModal[index] = true;
		setOpenModal(newOpenModal);
	};

	const handleCloseModal = (index) => {
		const newOpenModal = [...openModal];
		newOpenModal[index] = false;
		setOpenModal(newOpenModal);
	};

	const [hoveredButton, setHoveredButton] = useState(null);

	const handleMouseEnter = (index) => {
		setHoveredButton(index);
	};

	const handleMouseLeave = () => {
		setHoveredButton(null);
	};

	return (
		<>
			<Card.Group id='project-cards-container'>
				{myProjects.map((project, index) => (
					<Card key={project.id} id='project-cards'>
						<Image src={project.image} wrapped ui={false} id='project-image' />
						<Card.Content className='content-container'>
							<Card.Header>{project.name.toUpperCase()}</Card.Header>
							<Card.Description style={{fontWeight: "500"}}>{project.description}</Card.Description>
						</Card.Content>
						<Card.Content id='project-links-container'>
							{project.github[1] ? (
								<>
									<a
										className='project-links'
										href={project.github[0]}
										target='_blank'
										rel='noopener noreferrer'
										alt='github-frontend'>
										<i class='big github icon'></i> Github - Frontend
									</a>
									<a
										className='project-links'
										href={project.github[1]}
										target='_blank'
										rel='noopener noreferrer'
										alt='github-backend'>
										<i class='big github square icon'></i> Github - Backend
									</a>
								</>
							) : (
								<>
									<a className='project-links' href={project.github[0]} target='_blank' rel='noopener noreferrer' alt='github'>
										<i class='big github icon'></i> Github
									</a>
								</>
							)}
							<a className='project-links' href={project.vimeo} target='_blank' rel='noopener noreferrer' alt='vimeo-demo'>
								<i class='big vimeo icon'></i> Live Demo
							</a>
							<Modal
								id='modal'
								onClose={() => handleCloseModal(index)}
								onOpen={() => handleOpenModal(index)}
								open={openModal[index]}
								trigger={
									<Button
										key={index}
										style={{
											backgroundColor: hoveredButton === index ? '#1f70c0' : '#3B95E3',
											color: 'white',
										}}
										onMouseEnter={() => handleMouseEnter(index)}
										onMouseLeave={handleMouseLeave}>
										Project Info 
									</Button>
								}>
								<Modal.Header>
									<Header>
										<Header.Content style={{width: '100%'}}>
											<div style={{display: 'flex', justifyContent: 'space-between'}}>
												<div id='modal-header'>
													{project.name.toUpperCase()}
													<h5 style={{color: "#525252"}}>{project.info}</h5>
												</div>
												<div id='tech-stack-container'>
													<Image className='tech-icons' src={project.tech.frontend} />
													<Image className='tech-icons' src={project.tech.backend} />
												</div>
											</div>
										</Header.Content>
									</Header>
								</Modal.Header>
								<Modal.Content image>
									<Image wrapped size='medium' src={project.image} />
									<Modal.Description>
										<h5>
											<em>{project.description}</em>
										</h5>
										{project.features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</Modal.Description>
								</Modal.Content>
								<Modal.Actions>
									<Button 
                    key={index}
										style={{
											backgroundColor: hoveredButton === index ? '#1f70c0' : '#3B95E3',
											color: 'white',
										}}
										onMouseEnter={() => handleMouseEnter(index)}
										onMouseLeave={handleMouseLeave}
                    onClick={() => handleCloseModal(index)}
                    >
										Close
									</Button>
								</Modal.Actions>
							</Modal>
						</Card.Content>
					</Card>
				))}
			</Card.Group>
		</>
	);
};

export default Portfolio;