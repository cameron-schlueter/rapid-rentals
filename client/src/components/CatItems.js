import React from 'react';
import Kayak from './images/kayak.png'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "rgba(248, 249, 250, 0.7)",
        marginTop: '20vh',
        marginBottom: '20vh',
        width: '100vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        borderRadius: '10px'
    },
    card: {
        height: 'auto',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        width: '50%'
    },
}

export default function CatItems({currentPage, handlePageChange}) {
    return (
        <div style={styles.bgi}>
        <MDBRow style={styles.row}>
        <MDBCol sm='3'>
        <a  href="#signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}>
        
        <MDBCard style={styles.card} alignment='center'>
        <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay' style={{display: 'flex', justifyContent: 'center', marginTop: '2vh', marginBottom: '2vh'}}>
            <MDBCardImage src={Kayak} fluid alt='...' />
            <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
        </MDBRipple>
        <MDBCardBody>
            <MDBCardTitle>Canoe</MDBCardTitle>
            <MDBCardText>
                $100/day
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
        </a>
        </MDBCol>
        </MDBRow>
        </div>
    );
}