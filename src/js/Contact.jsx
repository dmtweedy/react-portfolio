import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <section id="contact" className="content">
      <h2><strong>Contact</strong></h2>
      <p>If you're interested in working together, feel free to reach out to me.</p>
      <Form>
        <div className="row">
          <Form.Group controlId="name" className="col-md-6">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="email" className="col-md-6">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>
        </div>

        <Form.Group controlId="message" className="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="custom-button">
          Send Message
        </Button>
      </Form>
    </section>
  );
}


export default Contact;
