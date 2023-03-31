import React, { useState } from "react";
import './WhyBuggify.css';
import { useNavigate } from "react-router-dom";
import Why from '../Buggify1.mp4';



const WhyBuggify = () => {

    const navigate = useNavigate();

    const gotoLogin = () => {
        navigate('/Login')
    }

    const [selected, setSelected] = useState(2);

    return (
        <>
            <div className="whybuggify">

                <video src={Why} autoPlay muted loop
                    style={{
                        width: "99.9%",
                        marginTop: "2rem",
                        border: "1px solid #04ff69"
                    }}>
                </video>


                <h3 className="h1">For Companies</h3>


                <div className="whybuggify-divs">

                    <div className="d1">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 1 ? "#07c7fe" : "#003e8b" }}
                            onClick={() => setSelected(1)}
                            src=""
                        />

                        <p className="d1-p"
                            style={{ color: selected === 1 ? "#07c7fe" : "#ffffff" }}>Improved Security</p>
                    </div>
                    <div className="d2">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 2 ? "#07c7fe" : "#003e8b" }}
                            onClick={() => setSelected(2)}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 2 ? "#07c7fe" : "#ffffff" }}>
                            Cost Effective
                        </p>
                    </div>
                    <div className="d3">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 3 ? "#07c7fe" : "#003e8b" }}
                            onClick={() => setSelected(3)}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 3 ? "#07c7fe" : "#ffffff" }}>
                            Rapid Detection
                        </p>
                    </div>


                    <div className="d4">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 4 ? "#07c7fe" : "#003e8b" }}
                            onClick={() => setSelected(4)}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 4 ? "#07c7fe" : "#ffffff" }}>
                            Good Reputation
                        </p>
                    </div>
                    <div className="d5">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 5 ? "#07c7fe" : "#003e8b" }}
                            onClick={() => setSelected(5)}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 5 ? "#07c7fe" : "#ffffff" }}>
                            Legal Compliance
                        </p>
                    </div>
                    <div className="d6">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 6 ? "#07c7fe" : "#003e8b" }}
                            onClick={() => setSelected(6)}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 6 ? "#07c7fe" : "#ffffff" }}>
                            Skill Diversity
                        </p>
                    </div>
                    <div className="d7">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 7 ? "#07c7fe" : "#003e8b" }}
                            onClick={() => setSelected(7)}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 7 ? "#07c7fe" : "#ffffff" }}>
                            Simplified Reporting
                        </p>
                    </div>

                </div>

                <div className="whybuggify-div">

                    {selected === 1 && (
                        <p className="whybuggify-div-p">

                            By utilizing a bug bounty platform, companies can tap into the expertise of a diverse group of researchers who can identify and report vulnerabilities that may have gone unnoticed otherwise.This can help the company improve its security posture and reduce the risk of cyber - attacks.
                        </p>
                    )}

                    {selected === 2 && (
                        <p className="whybuggify-div-p">

                            Bug bounty programs are often more cost - effective than traditional methods of identifying vulnerabilities such as hiring security consultants or running in -house security testing teams.Companies can set aside a specific budget for bug bounty programs and pay rewards only for valid vulnerabilities reported.
                        </p>
                    )}

                    {selected === 3 && (
                        <p className="whybuggify-div-p">

                            Bug bounty programs allow companies to identify vulnerabilities quickly and fix them before they can be exploited.This can help prevent potential data breaches, reputational damage, and financial losses.
                        </p>
                    )}

                    {selected === 4 && (
                        <p className="whybuggify-div-p">

                            Companies that run bug bounty programs demonstrate their commitment to security and willingness to work with the security community to improve their security posture.This can improve their reputation and enhance customer trust and loyalty.
                        </p>
                    )}

                    {selected === 5 && (
                        <p className="whybuggify-div-p">

                            Many industries and regulatory bodies require companies to demonstrate that they have a robust security posture and are taking proactive measures to identify and remediate vulnerabilities.Running a bug bounty program can help companies meet these requirements.
                        </p>
                    )}

                    {selected === 6 && (
                        <p className="whybuggify-div-p">

                            Bug bounty programs allow companies to tap into the expertise of a large pool of researchers who come from diverse backgrounds and possess a range of skills and knowledge.This can help companies identify vulnerabilities that may have been missed by their in -house security teams.
                        </p>
                    )}

                    {selected === 7 && (
                        <p className="whybuggify-div-p">

                            Bug bounty platforms provide companies with a streamlined way to receive vulnerability reports and communicate with researchers.This can save time and resources for both the company and the researchers.
                        </p>
                    )}
                </div>

                <h3 className="h1">For Researchers</h3>

                <div className="whybuggify-div">
                    <p className="whybuggify-div-p">
                        <span className="whybuggify-span" style={{ color: "#ffffff" }}>
                            Variety of Programs:
                        </span>
                        A good bug bounty platform should offer a wide range of programs across various industries, technologies, and domains. This ensures that researchers can find programs that match their skills and interests.
                    </p>
                    <p className="whybuggify-div-p"><span className="whybuggify-span" style={{ color: "#ffffff" }}>
                        Transparent and Fair Reward System:
                    </span>
                        The platform should have a transparent and fair reward system that motivates researchers to participate in the programs. The rewards should be commensurate with the severity and impact of the vulnerability found.
                    </p>
                    <p className="whybuggify-div-p"><span className="whybuggify-span" style={{ color: "#ffffff" }}>
                        Quick Payment and Recognition:
                    </span>
                        The platform should have a streamlined payment process that ensures that researchers receive their rewards quickly. Additionally, the platform should recognize and appreciate the efforts of researchers who consistently contribute to the programs.
                    </p>
                    <p className="whybuggify-div-p"><span className="whybuggify-span" style={{ color: "#ffffff" }}>
                        Efficient Communication:
                    </span>
                        The platform should have an efficient communication system that allows researchers to report vulnerabilities, receive updates from program owners, and ask questions to clarify doubts.
                    </p>
                    <p className="whybuggify-div-p"><span className="whybuggify-span" style={{ color: "#ffffff" }}>
                        Comprehensive Support:
                    </span>
                        The platform should provide comprehensive support to researchers, including access to tools, resources, and experts to help them identify and report vulnerabilities.
                    </p>
                    <p className="whybuggify-div-p"><span className="whybuggify-span" style={{ color: "#ffffff" }}>
                        Active Community:
                    </span>
                        The platform should have an active community of researchers who share knowledge, collaborate on bug hunting, and help each other improve their skills.
                    </p>
                    <p className="whybuggify-div-p"><span className="whybuggify-span" style={{ color: "#ffffff" }}>
                        Data Privacy and Security:
                    </span>
                        The platform should prioritize the security and privacy of researchers' data and ensure that it is protected from unauthorized access or disclosure.
                    </p>
                    <p className="whybuggify-div-p"><span className="whybuggify-span" style={{ color: "#ffffff" }}>
                        Learning with Security Academy:
                    </span>
                        Researchers have additional opportunity to Learn and Grow in other areas with Earning through Bounties and Level up their Knowledge.
                    </p>
                </div>

                <div className="button_ani whybuggify-button" onClick={gotoLogin}>
                    <button className="btn">Try Buggify</button>
                </div>

            </div>


        </>
    )

}

export default WhyBuggify;
















