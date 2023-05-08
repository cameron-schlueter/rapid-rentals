import React from 'react';
import BG from '../images/BG.jpg'
import Cards from '../CardContainer'
const styles = {
    bgi: {
        background: `url("${BG}") no-repeat bottom left`,
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
}


export default function MyOrders() {
    return (
        <div style={styles.bgi}>
            <Cards/>
        </div>
    );
}