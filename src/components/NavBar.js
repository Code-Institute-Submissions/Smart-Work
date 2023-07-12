import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Smart <i class="fa-solid fa-glasses"></i> Work</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Sign In</Nav.Link>
              <Nav.Link>Sign Up</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
   </Navbar>
    )
}

export default NavBar