import React from 'react';
import Project from './Project';

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
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;