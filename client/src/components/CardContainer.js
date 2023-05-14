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
        marginTop: '10%',
        marginBottom: '10%',
        width: '100%',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        borderRadius: '10px'
    },
    card: {
        height: 'auto',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: "rgba(248, 249, 250, 0.7)",
        transition: 'transform 0.2s',
        ':hover': {
            transform: 'scale(1.02)',
        },
    },
    cardBody: {
        padding: '1rem',
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: '1rem',
    }
}

export default function Cards() {
    return (
        <div>
            <MDBRow style={styles.row}>
                <MDBCol sm='3'>
                    <MDBCard style={styles.card} alignment='center'>
                        <MDBCardImage src='https://www.madbeachpaddlesports.com/uploads/5/6/4/5/56458131/s346933295520463466_p53_i3_w2560.jpeg' alt='Paddleboard' position='top' />
                        <MDBCardBody style={styles.cardBody}>
                            <MDBCardText style={styles.cardTitle}>Paddleboard Adventure</MDBCardText>
                            <MDBCardText>
                                Paddle across water so clear you can watch the trout swimming below you. 
                                A stand-up paddleboard gives you a fun way to explore, while a canoe or kayak adventure offers unspoiled scenery that few will ever see. 
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm='3'>
                    <MDBCard style={styles.card} alignment='center'>
                        <MDBCardImage src='https://cdn.shopify.com/s/files/1/2236/0745/files/BB_Harder_Five2Nine.jpg?v=1655142993' position='top' alt='Kayak and Canoes' />
                        <MDBCardBody style={styles.cardBody}>
                            <MDBCardText style={styles.cardTitle}>Premium Selection</MDBCardText>
                            <MDBCardText >
                                At Rapid Rentals, we offer a premium selection of kayaks, canoes, and paddleboards that will guarantee you and your family have a blast! 
                            </MDBCardText>
                            <MDBBtn href='#'>Go to Catalog</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm='3'>
                    <MDBCard style={styles.card} alignment='center'>
                        <MDBCardImage src='https://img.grouponcdn.com/deal/aNtfBdKpudSd535kdFbe/y9-2048x1229/v1/c870x524.jpg' alt='Rental Service' position='top' />
                        <MDBCardBody style={styles.cardBody}>
                            <MDBCardText style={styles.cardTitle}>Hassle-Free Rentals</MDBCardText>
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
