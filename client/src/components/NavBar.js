import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useLocation} from 'react-router-dom'
function NavBar() {
  const {pathname} = useLocation()
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand to="/" pathname={pathname === '/' ? 'nav-link active' : 'nav-link'}>
            Rapid Rentals
          </Navbar.Brand>
          <Nav pathname="ms-auto">
            <Link to="/" pathname={pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
            <Link to="/catalog" pathname={pathname === '/catalog' ? 'nav-link active' : 'nav-link'}>
              Catalog
            </Link>
            <Link to="/myrentals" pathname={pathname === '/myrentals' ? 'nav-link active' : 'nav-link'}>
              My Rentals
            </Link>
            <Link to="/booking" pathname={pathname === '/booking' ? 'nav-link active' : 'nav-link'}>
              Book Now
            </Link>
            <Link to="/signup" pathname={pathname === '/signup' ? 'nav-link active' : 'nav-link'}>
              Sign up
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
