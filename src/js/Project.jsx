import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Click the buttons below to access the project and its GitHub repository.
        </Card.Text>
        <Button variant="primary" href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </Button>
        <Button variant="secondary" href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
