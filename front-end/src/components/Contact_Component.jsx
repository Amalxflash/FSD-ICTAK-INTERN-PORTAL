import React from 'react'

const ContactComponent = () => {
  return(
    <>
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="mb-5">Contact Us For Any Queries</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <h5>Get In Touch</h5>
          <p className="fw-5"> We are avialble for you at any time 24/7.</p>
          <div className="d-flex align-items-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-map-marker-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-dark">Office</h5>
              <p className="mb-0">G1, Ground Floor, Thejaswini, Technopark Campus</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-dark">Mobile</h5>
              <p className="mb-0">+91 123 456 7890</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-dark">Email</h5>
              <p className="mb-0">email@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 150 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Enquiry</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-dark w-100 py-3" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  </>
  )
}
export default ContactComponent
