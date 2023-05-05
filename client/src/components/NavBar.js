import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Rapid Rentals</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</Nav.Link>
            <Nav.Link href="#catalog" onClick={() => handlePageChange('Catalog')}
            className={currentPage === 'Catalog' ? 'nav-link active' : 'nav-link'}>Catalog</Nav.Link>
            <Nav.Link href="#myorders" onClick={() => handlePageChange('MyRentals')}
            className={currentPage === 'MyRentals' ? 'nav-link active' : 'nav-link'}>My Rentals</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;