import React from "react";
import './WhyBuggify.css';
import { useNavigate } from "react-router-dom";

const WhyBuggify = () => {

    const navigate = useNavigate();

    const gotoLogin = () => {
        navigate('/Login')
    }

    return (
        <>
            <div className="whybuggify">
                <h3 className="whybuggify-h">
                    Why Buggify?
                </h3>
                <h3 className="h1">For Companies</h3>
                <div className="whybuggify-div">
                    <p className="whybuggify-div-p">
                        <span className="whybuggify-span" style={{ color: "#ffffff" }}>
                            Improved Security:
                        </span>
                        By utilizing a bug bounty platform, companies can tap into the expertise of a diverse group of researchers who can identify and report vulnerabilities that may have gone unnoticed otherwise.This can help the company improve its security posture and reduce the risk of cyber - attacks.
                    </p>
                    <p className="whybuggify-div-p">
                        <span className="whybuggify-span" style={{ color: "#ffffff" }}>
                            Cost - Effective:
                        </span>
                        Bug bounty programs are often more cost - effective than traditional methods of identifying vulnerabilities such as hiring security consultants or running in -house security testing teams.Companies can set aside a specific budget for bug bounty programs and pay rewards only for valid vulnerabilities reported.
                    </p>
                    <p className="whybuggify-div-p">
                        <span className="whybuggify-span" style={{ color: "#ffffff" }}>
                            Faster Identification and Resolution of Vulnerabilities:
                        </span>
                        Bug bounty programs allow companies to identify vulnerabilities quickly and fix them before they can be exploited.This can help prevent potential data breaches, reputational damage, and financial losses.
                    </p>
                    <p className="whybuggify-div-p">
                        <span className="whybuggify-span" style={{ color: "#ffffff" }}>
                            Positive Public Image:
                        </span>
                        Companies that run bug bounty programs demonstrate their commitment to security and willingness to work with the security community to improve their security posture.This can improve their reputation and enhance customer trust and loyalty.
                    </p>
                    <p className="whybuggify-div-p">
                        <span className="whybuggify-span" style={{ color: "#ffffff" }}>
                            Compliance with Regulations:
                        </span>
                        Many industries and regulatory bodies require companies to demonstrate that they have a robust security posture and are taking proactive measures to identify and remediate vulnerabilities.Running a bug bounty program can help companies meet these requirements.
                    </p>
                    <p className="whybuggify-div-p">
                        <span className="whybuggify-span" style={{ color: "#ffffff" }}>
                            Access to a Wide Pool of Talent:
                        </span>
                        Bug bounty programs allow companies to tap into the expertise of a large pool of researchers who come from diverse backgrounds and possess a range of skills and knowledge.This can help companies identify vulnerabilities that may have been missed by their in -house security teams.
                    </p>
                    <p className="whybuggify-div-p">
                        <span className="whybuggify-span" style={{ color: "#ffffff" }}>
                            Streamlined Reporting and Communication:
                        </span>
                        Bug bounty platforms provide companies with a streamlined way to receive vulnerability reports and communicate with researchers.This can save time and resources for both the company and the researchers.
                    </p>
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
















