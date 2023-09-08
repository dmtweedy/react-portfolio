// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Nav>
      <Nav.Item>
        <Link to="/about" className="nav-link">
          About Me
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/portfolio" className="nav-link">
          My Projects
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
