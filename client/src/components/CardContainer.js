import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';

  const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "rgba(248, 249, 250, 0.7)",
        marginTop: '20vh',
        marginBottom: '20vh',
        width: '100%',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        borderRadius: '10px'
    },
    card: {
        height: 'auto',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: 'transparent'
    },
  }


export default function Cards() {
  return (
    <div>
        <MDBRow style={styles.row}>
        <MDBCol sm='3'>
        <MDBCard style={styles.card} alignment='center'>
        <MDBCardImage src='https://www.madbeachpaddlesports.com/uploads/5/6/4/5/56458131/s346933295520463466_p53_i3_w2560.jpeg' alt='...' position='top' />
        <MDBCardBody>
            <MDBCardText>
            Paddle across water so clear you can watch the trout swimming below you. 
            A stand-up paddleboard gives you a fun way to explore, while a canoe or kayak adventure offers unspoiled scenery that few will ever see. 
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
        </MDBCol>

        <MDBCol sm='3'>
        <MDBCard style={styles.card} alignment='center'>
        <MDBCardImage src='https://cdn.shopify.com/s/files/1/2236/0745/files/BB_Harder_Five2Nine.jpg?v=1655142993' position='top' alt='...' />
        <MDBCardBody>
            <MDBCardText >
            At Rapid Rentals, we offer a premium selection of kayaks, canoes, and paddleboards that will gaurantee you and your family have a blast! 
            </MDBCardText>
            <MDBBtn href='#'>Go to Catalog</MDBBtn>
        </MDBCardBody>
        </MDBCard>
        </MDBCol>

        <MDBCol sm='3'>
        <MDBCard style={styles.card} alignment='center'>
        <MDBCardImage src='https://img.grouponcdn.com/deal/aNtfBdKpudSd535kdFbe/y9-2048x1229/v1/c870x524.jpg' alt='...' position='top' />
        <MDBCardBody>
            <MDBCardText>
            Enjoy hassle-free rentals and friendly, professional service. We're here to get you out exploring the waters of Michigan.
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
        </MDBCol>
        </MDBRow>
    </div>
  );
}