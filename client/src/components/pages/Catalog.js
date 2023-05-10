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
        
    }
}

export default function Catalog() {
    return (
        <div style={styles.bgi}>
            <MDBRow>
                <MDBCol sm='2'>
                    <div style={styles.contain}>
                        <SortBar/>
                    </div>
                </MDBCol>

                <MDBCol sm='10'>
                    <div style={styles.contain}>
                        <CatItems />
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
    );
}