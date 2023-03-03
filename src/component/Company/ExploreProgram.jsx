import React, { useRef, useLayoutEffect } from "react";
import "./ExploreProgram.css";
import { useNavigate } from "react-router-dom";
import BugHunter from "../image/BugHunter.jpg"
import RedTeam from "../image/RedTeam.jpg"

const C1 = () => {

    const navigate = useNavigate();
    const gotoRedTeam_Agreement = () => {
        navigate('/RedTeam_Agreement');
    }



    const scrollRefToPublic = useRef(null);
    const scrollRefToPrivate = useRef(null);
    useLayoutEffect(() => {
        if (scrollRefToPublic.current) {
            window.scrollTo(0, 0);
        }
        if (scrollRefToPrivate.current) {
            window.scrollTo(0, 0);
        }

    }, []);


    return (
        <>
            <div className="c1" ref={scrollRefToPrivate}>
                <div className="c1-section-1">
                    <h1 className="c1-h" >Choose according to Your Neeeds</h1>
                    <h3 className="c1-h2">Private Red Team Engagement</h3>
                    <div className="c1-div">
                        <div className="c1-div1">
                            <p className="c1-div1-p">Private Red Team Engagement is a simulated attack performed by Our team of
                                security experts on an organization's digital assets like networks, applications, and systems to identify
                                vulnerabilities and weaknesses in the organization's security posture. The goal is to help organizations
                                improve their security by highlighting areas where they are vulnerable to attack. This information can be used
                                to develop mitigation
                                strategies and improve the overall security of the organization.</p>

                            <p style={{
                                color: "#7A7A7A",
                                marginTop: "3rem",
                                fontSize: "18px",
                                lineHeight: "2.8rem",
                                letterSpacing: "1px",
                            }}>Benefits of having Our Expert Red Team on-board :
                            </p>

                            <p style={{
                                color: "#ffffff",
                                marginTop: "3rem",
                                fontSize: "14px",
                                lineHeight: "2.8rem",
                                letterSpacing: "1px",
                            }}>
                                <span style={{ marginLeft: " 20px" }}>Early identification and mitigation of potential threats.</span>
                                <br /><span style={{ marginLeft: " 20px" }}> Improved security posture through proactive testing.</span>
                                <br /> <span style={{ marginLeft: " 20px" }}>Validation of security controls and incident response plans.</span>
                                <br /> <span style={{ marginLeft: " 20px" }}>Increased awareness and preparedness of employees.</span>
                                <br /> <span style={{ marginLeft: " 20px" }}>Improved risk management and compliance with regulations.</span>
                            </p>
                        </div>
                        <div className="c1-div2">
                            <img src={RedTeam} className="c1-div2-img"></img>
                        </div>
                    </div>
                    <div className="button_ani c1-section1-button" id="scrollTo" onClick={gotoRedTeam_Agreement}>
                        <button className=" button3">Register Engagement</button></div>
                </div>

                <div className="c1-section2" ref={scrollRefToPublic}>
                    <h1 className="c1-section2-h">Open Source Bug Bounty Program</h1>

                    <div className="c1-div">
                        <div className=" c1-section2-div1">
                            <img src={BugHunter} className="c1-section2-div1-img"></img>
                        </div>
                        <div className="c1-section2-div2">
                            <p className="c1-div1-p">A public bug bounty program is a program where a company
                                or organization invites ethical hackers to identify and
                                report security vulnerabilities in their systems, applications, and / or products.
                                The company offers incentives, usually in the form of financial
                                rewards, for the responsible reporting of vulnerabilities.The purpose
                                of the program is to improve the security
                                of the company's assets by finding and fixing vulnerabilities before they can be
                                exploited by malicious actors. Public bug bounty programs are often used
                                by software companies, but any organization can participate.  </p>

                            <p style={{
                                color: "#7A7A7A",
                                marginTop: "3rem",
                                fontSize: "18px",
                                lineHeight: "2.8rem",
                                letterSpacing: "1px",
                            }}>Benefits of Open Source Bug Bounty Programs :
                            </p>

                            <p style={{
                                color: "#ffffff",
                                marginTop: "3rem",
                                fontSize: "14px",
                                lineHeight: "2.8rem",
                                letterSpacing: "1px",
                            }}>
                                <span style={{ marginLeft: " 20px" }}>Early identification of potential threats.</span>
                                <br /><span style={{ marginLeft: " 20px" }}>Cost-effective alternative to Penetration Testing / Red Team Engagement.</span>
                                <br /> <span style={{ marginLeft: " 20px" }}>Hop into a global network of security experts.</span>
                                <br /> <span style={{ marginLeft: " 20px" }}>Pay Based on Threat Finding.</span>
                                <br /> <span style={{ marginLeft: " 20px" }}>Fast Paced Working Environment to stay secure on developments.</span>
                            </p>
                        </div>

                    </div>
                    <div className="button_ani c1-section1-button">
                        <button className=" btn">Lunch Program</button></div>

                </div>
            </div>

        </>
    )
}

export default C1;


