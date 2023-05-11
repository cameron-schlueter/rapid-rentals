import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

const styles = {
  foot: {
    display: 'flex'
  }
}

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Check out our other projects:</span>
        </div>

        <div>
          <a href='https://github.com/KDNagpal' className='me-4 text-reset'>
            KD: <MDBIcon fab icon="github" />
          </a>
          <a href='https://github.com/AnthonyJohnson101' className='me-4 text-reset'>
            Anthony: <MDBIcon fab icon="github" />
          </a>
          <a href='https://github.com/cameron-schlueter' className='me-4 text-reset'>
            Cameron: <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Rapid Rentals
              </h6>
              <p>
              Rapid Rentals is your go-to spot for canoeing fun. We rent out top-quality canoes that are easy and safe to use,
               whether you're a beginner or a pro. Explore the nearby river at your own pace, or learn from our friendly guides. 
               At Rapid Rentals, we make sure your canoe trip is a great adventure that you'll never forget.





              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/catalog' className='text-reset'>
                  Catalog
                </a>
              </p>
              <p>
                <a href='booking' className='text-reset'>
                  Book Now
                </a>
              </p>
              <p>
                <a href='signup' className='text-reset'>
                  Sign up
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Rapid Rentals
        </a>
      </div>
    </MDBFooter>
  );
}