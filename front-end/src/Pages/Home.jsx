import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Course from '../components/Course';
import ContactComponent from '../components/Contact_Component';
import 'animate.css';
import WOW from 'wow.js';

const Home = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <Navbar />
        {/* Hero Section */}
        <section className="container-fluid py-5" style={{ backgroundColor: '#004080', color: 'white'}}>
        <div className="container">
          <div className="row d-flex align-items-center" >
            <div className="col-lg-6 mb-6 mb-lg-0">
              <div className="text-center" >
                <h1 className="display-2 text-light" >Grow Your Skill</h1>
                <h1 className="display-3 text-light">Start Learning</h1>
                <p className="lead">Begin your journey, gain a solid foundation, create great products, and advance your career.</p>
                <button className="btn btn-lg rounded-pill text-light" style={{backgroundColor:'#ff69b4'}}>Discover More</button>
              </div>
            </div>
            <div className="col-lg-6 align-items-end">
              <img style={{width:'250px', height:'350px',marginLeft:"210px"}} src='images/hero-image.png' className="img-fluid" alt="Hero" />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      <AboutUs />
      {/* Categories Start */}
      {/* Your course section - Course component */}
      <Course />
      {/* Team Start */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#004080', color: 'white' }}>
        <div className="container">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-4 text-light">Meet Our Instructors</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Instructor cards */}
            <div className="col wow fadeInUp" data-wow-delay="0.3s">
              <div className="card border-0 shadow-sm rounded-3 text-white">
                <img
                  src="../images/instructor-1.jpg"
                  className="card-img-top img-fluid"
                  style={{ height: '300px', objectFit: 'cover' }}
                  alt="instructor-1"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Alina Branton</h5>
                  <div className="mt-3">
                    <a href="#" className="btn btn-sm btn-light me-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-light me-2">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-light">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col wow fadeInUp" data-wow-delay="0.5s">
              <div className="card border-0 shadow-sm rounded-3 text-white">
                <img
                  src="../images/instructor-2.jpg"
                  className="card-img-top img-fluid"
                  style={{ height: '300px', objectFit: 'cover' }}
                  alt="instructor-2"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Michael Ebin</h5>
                  <div className="mt-3">
                    <a href="#" className="btn btn-sm btn-light me-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-light me-2">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-light">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col wow fadeInUp" data-wow-delay="0.7s">
              <div className="card border-0 shadow-sm rounded-3 text-white">
                <img
                  src="images/instructor-3.jpg"
                  className="card-img-top img-fluid"
                  style={{ height: '300px', objectFit: 'cover' }}
                  alt="instructor-3"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Aleena Elizabeth</h5>
                  <div className="mt-3">
                    <a href="#" className="btn btn-sm btn-light me-2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-light me-2">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-light">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End of instructor cards */}
          </div>
        </div>
      </div>
      {/* Team End */}
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Home;

