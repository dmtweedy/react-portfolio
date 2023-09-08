import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <footer className="footer">
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/dmtweedy" target="_blank" rel="noopener noreferrer">
            GitHub
          </Nav.Link>
          <Nav.Link href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Nav.Link>
        </Nav>
        <Navbar.Text>&copy; {new Date().getFullYear()} Damon Tweedy. All rights reserved.</Navbar.Text>
      </Navbar>
    </footer>
  );
}

export default Footer;
