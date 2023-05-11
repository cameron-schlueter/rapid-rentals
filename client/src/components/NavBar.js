import React from 'react';
import './Navbar.css';
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
            <Link className="custom-link" to="/" pathname={pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
            <Link className="custom-link" to="/catalog" pathname={pathname === '/catalog' ? 'nav-link active' : 'nav-link'}>
              Catalog
            </Link>
            <Link className="custom-link" to="/myrentals" pathname={pathname === '/myrentals' ? 'nav-link active' : 'nav-link'}>
            </Link>
            <Link className="custom-link" to="/booking" pathname={pathname === '/booking' ? 'nav-link active' : 'nav-link'}>
              Book Now
            </Link>
            <Link className="custom-link" to="/signup" pathname={pathname === '/signup' ? 'nav-link active' : 'nav-link'}>
              Sign up
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
