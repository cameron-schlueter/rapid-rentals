import React from 'react';
import CatItems from '../CatItems'
import SortBar from '../SortBar'
import BG2 from '../images/BG2.jpg'
import {
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit';

const styles = {
    bgi: {
        background: `url("${BG2}") no-repeat bottom left`,
        maxWidth: '100%',
        height: '100vh',
    },
    contain: {
        display: 'flex',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        
    },
    col1: {
        //display: 'flex',
        backgroundColor: "rgba(248, 249, 250, 0.7)",
        width: '20vw',
        height: '100vh'
    },
    col2: {
        //display: 'flex',
        marginTop: '20vh',
        marginBottom: '20vh',
        width: '80vw',
        backgroundColor: "rgba(248, 249, 250, 0.7)",
        paddingTop: '1vh',
        paddingBottom: '1vh',
        borderRadius: '10px'
    }
}

export default function Catalog() {
    return (
        <div style={styles.bgi}>
            <MDBRow style={styles.row}>
                <MDBCol sm='12' style={styles.col2}>
                    <div>
                        <CatItems />
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
    );
}