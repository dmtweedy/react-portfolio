import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <section id="about" className="content">
      <Container>
        <h2>About Me</h2>
        <Row>
          <Col xs={12} md={4}>
            <img src="" alt="Damon Tweedy" />
          </Col>
          <Col xs={12} md={8}>
            <p>
              Write a brief introduction about yourself, your background, and your skills as a developer.
            </p>
            <p>
              Mention your passions and what drives you in the tech industry.
            </p>
            <p>
              You can download my <a href="/" target="_blank" rel="noopener noreferrer">resume here</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
