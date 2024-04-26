import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
          <Link to="/" className="text-decoration-none title-link">Portfolio</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="text-decoration-none text-link">Home</Link>
                <Link to="/Project" className="text-decoration-none text-link">Project</Link>
                <Link to="/About"  className="text-decoration-none text-link">About</Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default header
