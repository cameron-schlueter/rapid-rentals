import React from 'react';
import BG from '../images/BG.jpg'
import Cards from '../CardContainer'
import Hero from '../Hero'





const styles = {
    bgi: {
        background: `url("${BG}") no-repeat bottom left`,
        maxWidth: '100%',
        height: '100vh',
    },
    contain: {
                display: 'flex',
        justifyContent: 'center',
    }
}




export default function Home() {
    return (
    <div style={styles.bgi}>
        <div style={styles.contain}>
            
        </div>

        <div style={styles.contain}>
            <Cards/>
        </div>
    </div>
    );
}