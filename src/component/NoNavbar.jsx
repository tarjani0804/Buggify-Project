import React from 'react';
import { useNavigate } from 'react-router-dom';


function NoNavbar() {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/')
    }
    const styles = {
        cursor: 'pointer',
        backgroundColor: '#0b0b0b'
    }
    return (
        <>
            <div onClick={gotoHome} style={styles}>
                <h1 style={{
                    color: "#04ff69",
                    paddingTop: "30px",
                    marginLeft: "10rem",
                    fontSize: "20px",
                }}

                >
                    Buggify
                </h1></div>
        </>

    );
}

export default NoNavbar;