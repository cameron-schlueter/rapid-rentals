import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Rapid Rentals
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#catalog"
              onClick={() => handlePageChange('Catalog')}
              className={
                currentPage === 'Catalog' ? 'nav-link active' : 'nav-link'
              }
            >
              Catalog
            </Nav.Link>
            <Nav.Link
              href="#booking"
              onClick={() => handlePageChange('Bookings')}
              className={
                currentPage === 'Bookings' ? 'nav-link active' : 'nav-link'
              }
            >
              Book Now
            </Nav.Link>
            <Nav.Link
              href="#myorders"
              onClick={() => handlePageChange('MyRentals')}
              className={
                currentPage === 'MyRentals' ? 'nav-link active' : 'nav-link'
              }
            >
              My Rentals
            </Nav.Link>
            <Nav.Link
              href="#signup"
              onClick={() => handlePageChange('Signup')}
              className={
                currentPage === 'Signup' ? 'nav-link active' : 'nav-link'
              }
            >
              Sign up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
