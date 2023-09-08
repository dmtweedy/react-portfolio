import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <section id="contact" className="content">
      <h2>Contact</h2>
      <p>If you're interested in working together, feel free to reach out to me.</p>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </section>
  );
}


export default Contact;
