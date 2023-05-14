import React from 'react';
import CatItems from '../CatItems';
import SortBar from '../SortBar';
import BG2 from '../images/BG2.jpg';
import {
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

const styles = {
    bgi: {
        background: `url("${BG2}") no-repeat center center/cover`,
        maxWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    col2: {
        marginBottom: '10%',
        width: '80vw',
        backgroundColor: "rgba(248, 249, 250, 0.7)",
        padding: '2%',
        borderRadius: '10px',
    }
}

export default function Catalog() {
    return (
        <div style={styles.bgi}>
            <MDBRow style={styles.row}>
                <MDBCol sm='12' style={styles.col2}>
                    <CatItems />
                </MDBCol>
            </MDBRow>
        </div>
    );
}
