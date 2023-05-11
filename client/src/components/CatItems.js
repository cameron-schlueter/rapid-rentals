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
  MDBBtn, 
  MDBTable, 
  MDBTableHead, 
  MDBTableBody
} from 'mdb-react-ui-kit';
import {Link, useLocation} from 'react-router-dom'

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

export default function CatItems() {

    const {pathname} = useLocation()

    return (
        <div style={styles.bgi}>
            <MDBTable align='middle'>
            <MDBTableHead light>
                <tr>
                <th scope='col'>Type</th>
                <th scope='col'>Pricing</th>
                <th scope='col'>Minimum Rental</th>
                <th scope='col'>Continue to Rental</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                <th scope='row'>Canoe</th>
                <td>$100/Day</td>
                <td>1 Day(s)</td>
                <td>
                    <Link to="/booking" pathname={pathname === 'booking/' ? 'nav-link active' : 'nav-link'}>
                    <MDBBtn color='link' size='sm'>
                    <i className="fa-solid fa-arrow-right"></i>
                    </MDBBtn>
                    </Link>
                </td>
                </tr>
            </MDBTableBody>
            </MDBTable>
        </div>
    );
}







{/* <MDBCol sm='3'>
<Link to='/' pathname={pathname === '/' ? 'nav-link active' : 'nav-link'}>    
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
</Link>
</MDBCol> */}