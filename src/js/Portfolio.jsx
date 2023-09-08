import React from 'react';
import Project from './Project';
import Card from 'react-bootstrap/Card';

function Portfolio() {
  const projects = [
    {
      title: 'MinneGrowta',
      image: '',
      deployedLink: '',
      githubLink: 'https://github.com/laurbaur024/garden-planner',
    },
    {
      title: 'konsoom',
      image: '',
      deployedLink: 'https://johntg96.github.io/konsoom/',
      githubLink: 'https://github.com/johntg96/konsoom',
    },
    {
      title: 'Bookshelf',
      image: '',
      deployedLink: 'https://dmtweedy-bookshelf-06533d4bddb5.herokuapp.com/',
      githubLink: 'https://github.com/dmtweedy/bookshelf',
    },
  ];

  return (
    <section className="portfolio content">
      <h2>My Projects</h2>
      <div className="project-list">
      <div className="project-grid">
        {projects.map((project, index) => (
          <Card key={index} className={index === 0 ? "big-project" : ""}>
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
      </div>
    </section>
  );
}

export default Portfolio;
