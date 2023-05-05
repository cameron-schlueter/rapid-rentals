import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Catalog from './pages/Catalog';
import MyRentals from './pages/MyRentals';
import Footer from './Footer'

const styles = {
  bg: {
    position: 'relative'
  }
}


export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
    if (currentPage === 'Catalog') {
      return <Catalog />;
    }
    return <MyRentals />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <NavBar handlePageChange={handlePageChange} />
      <section style={styles.bg}>
      {renderPage()}
      </section>
      <Footer/>
    </main>
  );
}

