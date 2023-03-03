import React, { useState, useEffect } from "react";
import './AcademyGetStarted.css';
import AcademyGet1 from "../image/AcademyGet1.png";
import AcademyGetStarted2 from "../image/AcademyGetStarted2.png";

import right from '../image/right.png';

import left from '../image/left.png';


import academy1 from '../image/academy1.png';
import academy2 from '../image/academy2.png';
import academy3 from '../image/academy3.png';
import academy4 from '../image/academy4.png';
import academy5 from '../image/academy5.png';
import academy6 from '../image/academy6.png';
import academy7 from '../image/academy7.png';
import academy8 from '../image/academy8.png';
import { useNavigate } from "react-router-dom";





const AcademyGetStarted = () => {
    const [allImages, setAllImages] = useState([academy1, academy2, academy3, academy4, academy5, academy6, academy7, academy8]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % allImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, allImages.length]);

    const handleLeftArrowClick = () => {
        setCurrentIndex(currentIndex === 0 ? allImages.length - 1 : currentIndex - 1);
    };

    const handleRightArrowClick = () => {
        setCurrentIndex((currentIndex + 1) % allImages.length);
    };

    const Navigate = useNavigate();
    const gotoGetStarted = () => {
        Navigate('/AcademyGetStarted');
    }
    const gotoCourses = () => {
        Navigate('/AcademyCourses');
    }
    const gotoAnnouncemenet = () => {
        Navigate('/AcademyAnnouncement');
    }
    const gotoVideo = () => {
        Navigate('/AcademyVideos');
    }
    const gotoBlogs = () => {
        Navigate('/AcademyBlogs');
    }
    const gotoDiscord = () => {
        Navigate('/AcademyDiscord');
    }




    return (
        <>
            <div className="nav">
                <nav className="academy-nav">
                    <ul className="academy-nav-ul">

                        <li className="academy-nav-li academy-nav-selected" onClick={gotoGetStarted}>
                            Get Started with Hackacdemy
                        </li>
                        <li className="academy-nav-li" onClick={gotoCourses}>
                            Courses
                        </li>
                        <li className="academy-nav-li" onClick={gotoAnnouncemenet}>
                            Announcement
                        </li>
                        <li className="academy-nav-li" onClick={gotoVideo}>
                            Videos
                        </li>
                        <li className="academy-nav-li" onClick={gotoBlogs}>
                            Blogs
                        </li>
                        <li className="academy-nav-li" onClick={gotoDiscord}>
                            Discord
                        </li>

                    </ul>
                </nav>

                <div className="academy-getstart">
                    <div className="academy-getstart-section1">
                        <h1 className="academy-getstart-section1-h">Learn to Hack, Hack to Earn</h1>
                        <div className="academy-getstart-section1">
                            <div className="academy-getstart-section1-div1">
                                <img src={AcademyGet1} className="academy-getstart-section1-div1-img" />
                                <div className="academy-getstart-section1-div1-p">
                                    <p className="academy-getstart-section1-div1-p1">
                                        Join Our Elite Cyber Security Academy and Empower Yourself with
                                        the Skills and Knowledge to Defend Against Digital Threats
                                        and Secure the Digital World.
                                    </p>
                                    <p className="academy-getstart-section1-div1-p2">Discover the Cutting-Edge Tools and Methods for Defending
                                        Against Cyber Threats at Our Cyber Security Academy Website.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="academy-getstart-section2">
                            <h1 className="academy-getstart-section2-h">Our Finest Courses</h1>

                            <div className="academy-getstart-section2-slider">
                                <div className="slider">

                                    <img
                                        src={left}
                                        alt="Left Arrow"
                                        onClick={handleLeftArrowClick}
                                        style={{
                                            position: "absolute",
                                            top: '50%',
                                            left: '5rem',
                                            cursor: 'pointer',
                                            width: '50px',
                                            height: '50px',
                                            justifyContent: 'center',
                                            verticalAlign: 'middle',
                                        }}
                                    />
                                    <img
                                        src={allImages[currentIndex]}
                                        className="slider-image"
                                        alt={`Slide ${currentIndex}`}
                                    />
                                    <img
                                        src={right}
                                        alt="Right Arrow"
                                        onClick={handleRightArrowClick}
                                        style={{
                                            position: "absolute",
                                            top: '50%',
                                            right: '5rem',
                                            cursor: 'pointer',
                                            width: '50px',
                                            height: '50px',
                                            gridColumn: '2/3',
                                            justifyContent: 'center',
                                            verticalAlign: 'middle',
                                        }}
                                    />

                                </div>

                                <div className="academy-getstarted-section2-div">
                                    <center>
                                        <p className="academy-getstarted-section2-div-p">
                                            Our Expert Pentesters have created some courses that
                                            helps building careers in cyber security &
                                            Guide New Comers throughout journey of Learning
                                        </p>
                                    </center>
                                    <div className="button_ani academy-getstarted-section2-div-button">
                                        <button className="btn">Explore Courses</button></div>
                                </div>

                            </div>
                            <div className="academy-getstarted-section3">
                                <h1 className="academy-getstarted-section3-h">
                                    What Makes Buggify Sec Academy Special?
                                </h1>
                                <div className="academy-getstarted-section3-div">
                                    <div className="academy-getstarted-section3-div1">
                                        <ul className="academy-getstarted-section3-div1-ul">
                                            <li className="academy-getstarted-section3-div1-li"> Courses for Every Area of Offensive Security at One Place. </li>
                                            <li className="academy-getstarted-section3-div1-li"> 3 formats available: 1-to-1 mentored class, group class, Video Courses. </li>
                                            <li className="academy-getstarted-section3-div1-li"> Practical Based Exams after Course Completion according to Current Industrial Needs. </li>
                                            <li className="academy-getstarted-section3-div1-li">Course Updates at Every Quarter.</li>
                                            <li className="academy-getstarted-section3-div1-li"> InfoSec News Updates Release at Every Month.</li>
                                            <li className="academy-getstarted-section3-div1-li"> Course & Exam based on Real World Pentesting Based Scenarios and much more.</li></ul>
                                    </div>
                                    <div className="academy-getstarted-section3-div2">
                                        <img src={AcademyGetStarted2} className="academy-getstarted-section3-div2-img"></img>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AcademyGetStarted;