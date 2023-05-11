import React from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Catalog from './pages/Catalog';
import MyRentals from './pages/MyRentals';
import Footer from './Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Booking from "./pages/Booking"


const styles = {
  bg: {
    position: 'relative'
  }
}


export default function AppContainer() {
  return (
    <Router>
    <main>
      <NavBar/>
      <section style={styles.bg}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/myrentals' element={<MyRentals/>}/>
          <Route path='/booking' element={<Booking/>}/>
        </Routes>
      </section>
      <Footer/>
    </main>
    </Router>
  );
}

