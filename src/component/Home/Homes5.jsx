import React, { useState } from 'react';
import './Homes5.css'
import web from '../image/web.png';
import malware from '../image/malware.png';
import netsec from '../image/netsec.png';
import academy1 from '../image/academy1.png';
import academy2 from '../image/academy2.png';
import academy3 from '../image/academy3.png';
import academy4 from '../image/academy4.png';
import academy5 from '../image/academy5.png';
import academy6 from '../image/academy6.png';
import academy7 from '../image/academy7.png';
import academy8 from '../image/academy8.png';



import right from '../image/right.png';

import left from '../image/left.png';

const Homes5 = () => {

    const [allImages, setAllImages] = useState([academy1, academy2, academy3, academy4, academy5, academy6, academy7, academy8])
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = allImages.length - 3;

    const handleLeftArrowClick = () => {
        setCurrentIndex(currentIndex - 1 < 0 ? 0 : currentIndex - 1);
    };

    const handleRightArrowClick = () => {
        setCurrentIndex(currentIndex + 1 > maxIndex ? maxIndex : currentIndex + 1);
    };
    const styles = {
        div: {
            backgroundColor: '#141414',
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px',
            width: '300px',
            margin: '10px',
            border: '1px solid #0ff069',
            borderRadius: '10px',
        },

        divHeading: {
            color: '#FFFFFF',
            fontSize: '16px',
            textAlign: 'center',
            marginTop: '5rem',
        },
    };

    return (
        <>
            <div className='section-five' >

                <h3 className="section-five-h1 h1">For Academy</h3>
                <h1 className="h section-five-h2">Learn by breaking things</h1>
                <p className="section-five-p ">Buggify is willing for Students to master their career into Cyber Security Profession by providing different Security Courses from Various Area of Technologies from Web Application to Network Pentesting, Hardware & IoT Pentesting, Cloud Security Assessment to Malware Analysis and many more.</p>





                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={left}
                        alt="Left Arrow"
                        onClick={handleLeftArrowClick}
                        style={{
                            cursor: 'pointer',
                            width: '50px',
                            height: '50px',
                            justifyContent: 'center',
                            verticalAlign: 'middle',
                            marginTop: '12rem',
                        }}
                    />
                    <div className="slider-container">
                        {allImages.slice(currentIndex, currentIndex + 3).map((allImages, index) => (
                            <img key={index} src={allImages} className="section-five-img" />
                        ))}
                    </div>
                    <img
                        src={right}
                        alt="Right Arrow"
                        onClick={handleRightArrowClick}
                        style={{
                            cursor: 'pointer',
                            width: '50px',
                            height: '50px',
                            gridColumn: '2/3',
                            justifyContent: 'center',
                            verticalAlign: 'middle',
                            marginTop: '12rem',
                        }}>
                    </img>
                </div>
            </div>
        </>
    );
}

export default Homes5;
