import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Catalog from './pages/Catalog';
import MyOrders from './pages/MyOrders';
import Footer from './Footer'


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
    return <MyOrders />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main style={styles.main}>
      <NavTabs handlePageChange={handlePageChange} />
      <section>
      {renderPage()}
      </section>
      <Footer/>
    </main>
  );
}

