import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
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
        width: '80vw',
        justifyContent: 'center',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        borderRadius: '10px'
    },
    card: {
        height: 'auto'
    }
  }


export default function Cards() {
  return (
    <div>
        <MDBRow style={styles.row}>
        <MDBCol sm='3'>
        <MDBCard style={styles.card}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
        <MDBCardBody>
            <MDBCardText>
            Paddle across water so clear you can watch the trout swimming below you. 
            A stand-up paddleboard gives you a fun way to explore, while a canoe or kayak adventure offers unspoiled scenery that few will ever see. 
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
        </MDBCol>

        <MDBCol sm='3'>
        <MDBCard style={styles.card}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody>
            <MDBCardText>
            At Rapid Rentals, we offer a premium selection of Kayaks, Canoes, and Paddle Boards that will gaurantee you and your family have a blast! 
            Check out our catalog!
            </MDBCardText>
            <MDBBtn href='#'>Go to Catalog</MDBBtn>
        </MDBCardBody>
        </MDBCard>
        </MDBCol>

        <MDBCol sm='3'>
        <MDBCard style={styles.card}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
        <MDBCardBody>
            <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
        </MDBCol>
        </MDBRow>
    </div>
  );
}