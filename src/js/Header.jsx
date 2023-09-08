import React from 'react';
import Navigation from './Navigation';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Damon Tweedy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navigation />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
