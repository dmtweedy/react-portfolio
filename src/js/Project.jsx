import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img className="card-img" variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="button-container">
        <Button variant="primary" href={deployedLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
          Deployed App
        </Button>
        <Button variant="secondary" href={githubLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '20px' }}>
          GitHub Repository
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;
