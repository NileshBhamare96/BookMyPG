// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <h5>About Us</h5>
//             At BookMyPG, we understand that finding the perfect accommodation can be a daunting task.
//           </div>
//           <div className="col-md-4">
//             <h5>Connect With Us</h5>
//             <ul className="social-icons">
//               <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
//               <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
//               <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <h5>Contact Us</h5>
//             <ul className="contact-info">
//               <li><i className="fa fa-map-marker"></i>123 Main Street, Anytown USA</li>
//               <li><i className="fa fa-phone"></i>+91 8007592194</li>
//               <li><i className="fa fa-envelope"></i>info@BBookMyPG.com</li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <h4>Newsletter</h4>
//             <p>Sign up for our newsletter to receive the latest travel news and special offers.</p>
//             <form>
//               <div className="input-group">
//                 <input type="email" className="form-control" placeholder="Enter your email" />
//                 <span className="input-group-btn">
//                   <button className="btn btn-primary" type="submit">Subscribe</button>
//                 </span>
//               </div>
//             </form>
//           </div>
//           <div className="row">
//           <div className="col-lg-12">
//             <hr />
//             <p className="text-muted">© 2023 Book My PG Company. All rights reserved.</p>
//           </div>
//         </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='bg-dark text-center text-dark'>
      <Container className='p-4 pb-0 text-white bg-dark'>
        <section className='mb-4'>
          <Button
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-facebook-f"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-twitter"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-google"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-instagram"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-linkedin-in"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-github"></i>
          </Button>
        </section>
      </Container>

      <section className=''>
        <Container className='text-center text-md-start mt-5 bg-dark text-white'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                
                <img
                                src="https://fastercapital.com/images/company/slider/book-my-pg.jpg?t=1"
                                className="card-img-top"
                                style={{width:"40%",height:"60px",mixBlendMode:"hard-light"}}
                               
                                /> Book My PG
              </h6>
              <p className='text-justify'>
              1.  Welcome to BookMyPG – Your Ultimate Destination for Hassle-Free Accommodation!.
          
              
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                Physician
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Covid Consultant
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Dentist
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Gynecologist
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className="fas fa-home me-2"></i>

              Ansari Nagar East, Gautam Nagar, Ansari Nagar East, New Delhi, 110029
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@freelance_project.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 91 8007592194
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 91 9284926333
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-3 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} freelance_project.com
        <a className='text-white' href='https://mdbootstrap.com/'>
          
        </a>
      </div>
    </footer>
  );
}



