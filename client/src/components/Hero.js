import React from 'react';


const styles = {
    logo: {
        width: '15vw',
        height: '10%'
    },
    contain: {
        display: 'flex',
        width: '100vw',
        height:'10vh',
        backgroundColor: 'white'
    }
}

export default function Hero() {
    return (
        <div style={styles.contain}>
            WORDS
        </div>
    );
}