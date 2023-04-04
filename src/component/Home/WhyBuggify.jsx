import React, { useState } from "react";
import './WhyBuggify.css';
import { useNavigate } from "react-router-dom";
import Why from '../Buggify1.mp4';
import cost from '../image/icons8.png';
import security from '../image/security.png';
import detection from '../image/detection.png';
import reputation from '../image/reputation.png';
import legal from '../image/legal.png';
import diversity from '../image/diversity.png';
import report from '../image/report.png';
import diversity_r from '../image/diversity_r.png';
import equity from '../image/equity.png';
import promptness from '../image/promptness.png';
import communication from '../image/communication.png';
import support from '../image/support.png';
import community from '../image/community.png';
import confiden from '../image/confiden.png';
import learn from '../image/learn.png';


const WhyBuggify = () => {

    const navigate = useNavigate();

    const gotoLogin = () => {
        navigate('/Login')
    }

    const [selected, setSelected] = useState(2);
    const [rselected, setrSelected] = useState(2);

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
                            style={{ backgroundColor: selected === 1 ? "#07c7fe" : "#003e8b", width: "80%" }}
                            onClick={() => setSelected(1)}
                            src={security}
                        />

                        <p className="d1-p"
                            style={{ color: selected === 1 ? "#07c7fe" : "#ffffff" }}>Improved Security</p>
                    </div>
                    <div className="d2">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 2 ? "#07c7fe" : "#003e8b" }}
                            onClick={() => setSelected(2)}
                            src={cost}
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
                            src={detection}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 3 ? "#07c7fe" : "#ffffff" }}>
                            Rapid Detection
                        </p>
                    </div>


                    <div className="d4">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 4 ? "#07c7fe" : "#003e8b", width: "80%" }}
                            onClick={() => setSelected(4)}
                            src={reputation}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 4 ? "#07c7fe" : "#ffffff" }}>
                            Good Reputation
                        </p>
                    </div>
                    <div className="d5">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 5 ? "#07c7fe" : "#003e8b", width: "80%" }}
                            onClick={() => setSelected(5)}
                            src={legal}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 5 ? "#07c7fe" : "#ffffff" }}>
                            Legal Compliance
                        </p>
                    </div>
                    <div className="d6">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 6 ? "#07c7fe" : "#003e8b", width: "75%", padding: "4.5rem 4.5rem" }}
                            onClick={() => setSelected(6)}
                            src={diversity}
                        />
                        <p className="d1-p"
                            style={{ color: selected === 6 ? "#07c7fe" : "#ffffff" }}>
                            Skill Diversity
                        </p>
                    </div>
                    <div className="d7">
                        <img className="d1-span"
                            style={{ backgroundColor: selected === 7 ? "#07c7fe" : "#003e8b", width: "80%" }}
                            onClick={() => setSelected(7)}
                            src={report}
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

                            By utilizing a bug bounty platform, companies can tap into the expertise of a diverse group of researchers who can identify and report vulnerabilities that may have gone unnoticed otherwise. This can help the company improve its security posture and reduce the risk of cyber - attacks.
                        </p>
                    )}

                    {selected === 2 && (
                        <p className="whybuggify-div-p">

                            Bug bounty programs are often more cost-effective than traditional methods of identifying vulnerabilities such as hiring security consultants or running in-house security testing teams. Companies can set aside a specific budget for bug bounty programs and pay rewards only for valid vulnerabilities reported.
                        </p>
                    )}

                    {selected === 3 && (
                        <p className="whybuggify-div-p">

                            Bug bounty programs allow companies to identify vulnerabilities quickly and fix them before they can be exploited. This can help prevent potential data breaches, reputational damage, and financial losses.
                        </p>
                    )}

                    {selected === 4 && (
                        <p className="whybuggify-div-p">

                            Companies that run bug bounty programs demonstrate their commitment to security and willingness to work with the security community to improve their security posture. This can improve their reputation and enhance customer trust and loyalty.
                        </p>
                    )}

                    {selected === 5 && (
                        <p className="whybuggify-div-p">

                            Many industries and regulatory bodies require companies to demonstrate that they have a robust security posture and are taking proactive measures to identify and remediate vulnerabilities. Running a bug bounty program can help companies meet these requirements.
                        </p>
                    )}

                    {selected === 6 && (
                        <p className="whybuggify-div-p">

                            Bug bounty programs allow companies to tap into the expertise of a large pool of researchers who come from diverse backgrounds and possess a range of skills and knowledge. This can help companies identify vulnerabilities that may have been missed by their in -house security teams.
                        </p>
                    )}

                    {selected === 7 && (
                        <p className="whybuggify-div-p">

                            Bug bounty platforms provide companies with a streamlined way to receive vulnerability reports and communicate with researchers. This can save time and resources for both the company and the researchers.
                        </p>
                    )}
                </div>

                <h3 className="h1">For Researchers</h3>

                <div className="whybuggify-div">

                    <div className="whybuggify-divs-r">

                        <div className="d1">
                            <img className="d1-span"
                                style={{ backgroundColor: rselected === 1 ? "#07c7fe" : "#003e8b", width: "90%", padding: "4rem 4rem" }}
                                onClick={() => setrSelected(1)}
                                src={diversity_r}
                            />

                            <p className="d1-p"
                                style={{ color: rselected === 1 ? "#07c7fe" : "#ffffff" }}>
                                Diversity
                            </p>
                        </div>
                        <div className="d2">
                            <img className="d1-span"
                                style={{ backgroundColor: rselected === 2 ? "#07c7fe" : "#003e8b", width: "90%", padding: "4rem 4rem" }}
                                onClick={() => setrSelected(2)}
                                src={equity}
                            />
                            <p className="d1-p"
                                style={{ color: rselected === 2 ? "#07c7fe" : "#ffffff" }}>
                                Equity
                            </p>
                        </div>
                        <div className="d3">
                            <img className="d1-span"
                                style={{ backgroundColor: rselected === 3 ? "#07c7fe" : "#003e8b", width: "90%", padding: "4rem 4rem" }}
                                onClick={() => setrSelected(3)}
                                src={promptness}
                            />
                            <p className="d1-p"
                                style={{ color: rselected === 3 ? "#07c7fe" : "#ffffff" }}>
                                Promptness
                            </p>
                        </div>


                        <div className="d4">
                            <img className="d1-span"
                                style={{ backgroundColor: rselected === 4 ? "#07c7fe" : "#003e8b", width: "90%", padding: "4rem 4rem" }}
                                onClick={() => setrSelected(4)}
                                src={communication}
                            />
                            <p className="d1-p"
                                style={{ color: rselected === 4 ? "#07c7fe" : "#ffffff" }}>
                                Fluency
                            </p>
                        </div>
                        <div className="d5">
                            <img className="d1-span"
                                style={{ backgroundColor: rselected === 5 ? "#07c7fe" : "#003e8b", width: "90%", padding: "4rem 4rem" }}
                                onClick={() => setrSelected(5)}
                                src={support}
                            />
                            <p className="d1-p"
                                style={{ color: rselected === 5 ? "#07c7fe" : "#ffffff" }}>
                                Assistance
                            </p>
                        </div>
                        <div className="d6">
                            <img className="d1-span"
                                style={{ backgroundColor: rselected === 6 ? "#07c7fe" : "#003e8b", width: "90%", padding: "4rem 4rem" }}
                                onClick={() => setrSelected(6)}
                                src={community}
                            />
                            <p className="d1-p"
                                style={{ color: rselected === 6 ? "#07c7fe" : "#ffffff" }}>
                                Engagement
                            </p>
                        </div>
                        <div className="d7">
                            <img className="d1-span"
                                style={{ backgroundColor: rselected === 7 ? "#07c7fe" : "#003e8b", width: "90%", padding: "4rem 4rem" }}
                                onClick={() => setrSelected(7)}
                                src={confiden}
                            />
                            <p className="d1-p"
                                style={{ color: rselected === 7 ? "#07c7fe" : "#ffffff" }}>
                                Confidentiality
                            </p>
                        </div>
                        <div className="d8">
                            <img className="d1-span"
                                style={{ backgroundColor: rselected === 8 ? "#07c7fe" : "#003e8b", width: "90%", padding: "4rem 4rem" }}
                                onClick={() => setrSelected(8)}
                                src={learn}
                            />
                            <p className="d1-p"
                                style={{ color: rselected === 8 ? "#07c7fe" : "#ffffff" }}>
                                Education
                            </p>
                        </div>

                    </div>
                    <div className="whybuggify-div">

                        {rselected === 1 && (
                            <p className="whybuggify-div-p">

                                A good bug bounty platform should offer a wide range of programs across various industries, technologies, and domains.This ensures that researchers can find programs that match their skills and interests.
                            </p>
                        )}

                        {rselected === 2 && (
                            <p className="whybuggify-div-p">

                                The platform must offer a clear and equitable incentive structure that encourages researchers to engage in the program, with rewards proportional to the level of severity and impact of the identified vulnerabilities.
                            </p>
                        )}

                        {rselected === 3 && (
                            <p className="whybuggify-div-p">

                                The platform should have a streamlined payment process that ensures that researchers receive their rewards quickly.Additionally, the platform should recognize and appreciate the efforts of researchers who consistently contribute to the programs.
                            </p>
                        )}

                        {rselected === 4 && (
                            <p className="whybuggify-div-p">

                                The platform should have an efficient communication system that allows researchers to report vulnerabilities, receive updates from program owners, and ask questions to clarify doubts.
                            </p>
                        )}

                        {rselected === 5 && (
                            <p className="whybuggify-div-p">

                                The platform should provide comprehensive support to researchers, including access to tools, resources, and experts to help them identify and report vulnerabilities.
                            </p>
                        )}

                        {rselected === 6 && (
                            <p className="whybuggify-div-p">

                                The platform should have an active community of researchers who share knowledge, collaborate on bug hunting, and help each other improve their skills.
                            </p>
                        )}

                        {rselected === 7 && (
                            <p className="whybuggify-div-p">

                                The platform should prioritize the security and privacy of researchers' data and ensure that it is protected from unauthorized access or disclosure.
                            </p>
                        )}
                        {rselected === 8 && (
                            <p className="whybuggify-div-p">

                                Researchers have additional opportunity to Learn and Grow in other areas with Earning through Bounties and Level up their Knowledge.
                            </p>
                        )}
                    </div>

                </div>

                <div className="button_ani whybuggify-button" onClick={gotoLogin}>
                    <button className="btn">Try Buggify</button>
                </div>

            </div>


        </>
    )

}

export default WhyBuggify;
















