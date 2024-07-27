import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* About Start */}
      <div className="text-light" style={{backgroundColor: '#004080'}}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="fs-5 text-light text-start pe-3 "style={{fontFamily:'Roboto, sans-serif',fontWeight:'lighter', opacity:'0.5'}}>
                About Us
              </h6>
              <h1 className="mb-4 text-light" style={{fontFamily:'Roboto, sans-serif'}}>Welcome to ICTAK</h1>
              <h1 className="mb-4 text-light" style={{fontFamily:'Roboto, sans-serif'}}>Build your Career with ICTAK</h1>
              <p className="mb-4">
                ICT Academy of Kerala (ICTAK) is a social enterprise officially
                launched on the 24th of June, 2014. The organization had a
                humble beginning providing skill training programs to selected
                academic institutions. Over the years, ICTAK has grown to a
                prime service provider of all ICT and innovation-related
                training and capacity-building programs in the state.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">⭐ World's leading Instructors</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">⭐ Hybrid Classes</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">⭐ Supported by Govt. of India</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">⭐ Globally recognized certifications</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">⭐ Partnered by Govt. of Kerala</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">⭐ Placement Guaranteed</p>
                </div>
              </div>
              <a className="btn btn-dark mt-3 text-light" href="#" style={{opacity:'0.8'}}>
                Know More
              </a>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100 border rounded-3 shadow"
                  src="images/about.jpg"
                  alt="about-image"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-center wow fadeInUp fs-4" data-wow-delay="0.3s">
        <div className="container-fluid ms-5 my-5">
          <div className="col g-2">
            <large className="flex-fill text-center px-3 py-2">
            🎓
              100K+ Participants Trained
            </large>
            <large className="flex-fill text-center px-3 py-2">
            👤
              25K+ Faculty Trained
            </large>
            <large className="flex-fill text-center px-3 py-2">
              💼
              14K+ Placement Realised
            </large>
            <large className="flex-fill text-center px-3 py-2">
            🏢
              2K+ Companies Connected
            </large>
          </div>
        </div>
      </div>
      </div>
      {/* About End */}
    </>
  );
};

export default AboutUs;
