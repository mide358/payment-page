import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import avatar from './assets/avatar.png';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="navigation">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="all-links">
          <Nav.Item>
            <Nav.Link href="/">TRIPS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">RECENTLY VIEWED</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">BOOKINGS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <img src={avatar} alt="avatar" style={{ height: 70 }} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
