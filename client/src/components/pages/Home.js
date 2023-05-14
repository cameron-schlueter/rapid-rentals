import React from 'react';
import BG from '../images/BG.jpg';
import Cards from '../CardContainer';
import Hero from '../Hero';

const styles = {
    bgi: {
        background: `url("${BG}") no-repeat center center/cover`,
        maxWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contain: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '0 auto',
        maxWidth: '12000px',
        background: 'transparent'
    }
};

export default function Home() {
    return (
        <div style={styles.bgi}>
            <div style={styles.contain}>
                <Cards />
            </div>
        </div>
    );
}
