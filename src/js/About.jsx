import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DamonTweedyImage from '../IMG_1247.jpg';

function About() {
  return (
    <section id="about" className="about-content">
      <Container>
        <h2><strong>About Me</strong></h2>
        <Row>
          <Col xs={12} md={4}>
            <img src={DamonTweedyImage} alt="Damon Tweedy" className="img-fluid"/>
          </Col>
          <Col xs={12} md={8}>
            <p>
              Hi, I'm Damon Tweedy, a software developer with a niche for the front end.
              I have a certificate in Full-Stack Development from the University of Minnesota, and I've dived into building REACT sites, databases, backends, front ends, and much more.
            </p>
            <p>
              What excites me most about tech is seeing the new things we can do every day when it comes to video games and entertainment. I'm very eager to learn about new tech and trends within the gamer industry.
              In my free time, I enjoy playing new/old video games and spending time with my friends and family.
            </p>
            <p>
              You can download my resume <a href="/" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
