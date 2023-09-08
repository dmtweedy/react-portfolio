import React from 'react';
import Project from './Project';
import Card from 'react-bootstrap/Card';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: '',
      deployedLink: '',
      githubLink: '',
    },
    {
      title: 'Project 2',
      image: '',
      deployedLink: '',
      githubLink: '',
    },
    {
      title: 'Project 3',
      image: '',
      deployedLink: '',
      githubLink: '',
    },
  ];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Card key={index}>
            <Card.Body>
              <Project
                title={project.title}
                image={project.image}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
