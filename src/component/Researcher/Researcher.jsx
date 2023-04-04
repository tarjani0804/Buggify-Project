import React from 'react';
import './Researcher.css';

import researcher1 from '../image/researcher_1.png';
import researcher2 from '../image/researcher_2.png';
import researcher3 from '../image/researcher_3.png';

import CompanyProduct1 from '../image/CompanyProduct1.png';
import CompanyProduct2 from '../image/CompanyProduct2.png';
import CompanyProduct3 from '../image/CompanyProduct3.png';
import CompanyProduct4 from '../image/CompanyProduct4.png';
import CompanyProduct5 from '../image/CompanyProduct5.png';
import CompanyProduct6 from '../image/CompanyProduct6.png';
import CompanyProduct7 from '../image/CompanyProduct7.png';
import CompanyProduct8 from '../image/CompanyProduct8.png';

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { useState } from 'react';



const Researcher = () => {

    const [firstIndex, setFirstIndex] = useState(0);
    const images = [CompanyProduct1, CompanyProduct2, CompanyProduct3, CompanyProduct4, CompanyProduct5, CompanyProduct6, CompanyProduct7, CompanyProduct8];
    const maxIndex = images.length - 2;

    const handleLeftIconClick = () => {
        const newIndex = firstIndex - 2;
        setFirstIndex(newIndex < 0 ? maxIndex - (Math.abs(newIndex) % (maxIndex + 2)) : newIndex);
    };

    const handleRightIconClick = () => {
        const newIndex = firstIndex + 2;
        setFirstIndex(newIndex > maxIndex ? newIndex % (maxIndex + 2) : newIndex);
    };

    return (
        <>
            <div className='researcher'>

                <h1 className='researcher-h'>
                    Security Researchers are legend who Secure the Internet
                </h1>
                <div className="researcher-section">
                    <div className="researcher-section-div">
                        <div className="researcher-section-div1">
                            <div className="researcher-section-div-image researcher-img-1">
                                <img src={researcher1} className="researcher-section-div-img"></img>
                            </div>
                            <div className="researcher-section-div-content">
                                <h3 className="researcher-section-div-h1">
                                    Test Global Systems Ethically without landing yourself behind the Bars
                                </h3>

                                <p className="researcher-section-div-p">
                                    Bug Bounty Platform Provides you a chance to use your passion into earning money. We Provides Various types of testing for every types of skills that Security Researcher have to test Global MNCs to Local Organizations with same respect.
                                    <br /><br />
                                    Global Clients of Ours provide Researchers opportunities to hack them legally and increase their security postures by reporting Vulnerabilities to them directly.
                                    See <a href={'/program'} style={{ color: "#878787", textDecoration: "underline" }} > Programs</a> that are available for you.

                                </p>
                            </div>
                        </div>
                        <div className="researcher-section-div2">
                            <div className="researcher-section-div-content researcher-content-2">
                                <h3 className="researcher-section-div-h1">
                                    Gameified Experience in Live Hacking Events
                                </h3>

                                <p className="researcher-section-div-p">
                                    Maintaining Work Life Balance is Extremely Important and we care for Our Researchers who touches the higher ground. Who made to the Leader-boards (Top 20 Hackers).
                                    <br /><br />
                                    At International Locations, We collaborate with Our Clients to Organize Live Hacking Events to
                                    Hack Competitively on Common Target and maintain Leaderboards of Event and can win exciting rewards. As Well Touring Across the  world, and enjoying Every Single Moments and Collaborate with Amazing Hackers around the Globe.
                                </p>
                            </div>
                            <div className="reseracher-section-div-image researcher-img-2">
                                <img src={researcher2} className="researcher-section-div-img"></img>
                            </div>
                        </div>
                        <div className="researcher-section-div3">
                            <div className="researcher-section-div-image researcher-img-1">
                                <img src={researcher3} className="researcher-section-div-img"></img>
                            </div>
                            <div className="researcher-section-div-content">
                                <h3 className="researcher-section-div-h1">
                                    Learn and Hack Together
                                </h3>

                                <p className="researcher-section-div-p">
                                    Buggify have community of Hackers who collaborate to Hack Together,
                                    Learn Various Topics together. Great Community makes researchers better where they are lacking and constantly evolve them for a better future.
                                    <br /><br />
                                    Our <a href={'/AcademyDiscord'} style={{ color: "#878787", textDecoration: "underline" }} > Discord</a> Server is full of Various Hackers having different skill-sets.
                                    Our <a href={'/AcademyGetStarted'} style={{ color: "#878787", textDecoration: "underline" }} > Hackedemy</a> Helps to Get you started in Cyber Security by Continuously Updated Courses.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="researcher-div2">

                    <h1 className="researcher-div-h2">
                        Hack Target that Match your skillsets

                    </h1>
                    <div className="researcher-div">
                        <span className="leftArrow">

                            <BsFillArrowLeftCircleFill
                                className="arrow-left"
                                onClick={handleLeftIconClick}
                            />
                        </span>
                        <div className="researcher-img-div1">
                            <img src={images[firstIndex]} className="div-img1" />
                            <img src={images[firstIndex + 1]} className="div-img2" />

                        </div>

                        <div className="rightArrow">
                            <BsFillArrowRightCircleFill
                                className="arrow-right"
                                onClick={handleRightIconClick}
                            />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Researcher;

