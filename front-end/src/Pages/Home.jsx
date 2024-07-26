import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Course from '../components/Course';
import Footer from '../components/Footer';
import CarouselIct from './CarouselIct';

const Home = () => {
  return (
    <div>
      <Navbar />

        <CarouselIct />
      
      <div style={{ marginTop: '60px' }}>
        <AboutUs />
        <br />
        <Course />
        <br/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
