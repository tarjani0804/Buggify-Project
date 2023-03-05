import React, { useRef, useLayoutEffect } from "react";
import './Blog.css';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const Report = () => {

    const scrollRef = useRef(null);
    useLayoutEffect(() => {
        if (scrollRef.current) {
            window.scrollTo(0, 0);
        }
    }, []);


    const navigate = useNavigate()
    const gotoBlogs = () => {
        navigate('/academyBlogs');
    }
    const gotoCiscoVulernability = () => {
        navigate('/AcademyBlogs-Blog2')
    }
    const gotoAtlassianBlog = () => {
        navigate('/AcademyBlogs-Blog3')
    }
    const gotoGamblingBlog = () => {
        navigate('/AcademyBlogs-Blog4')
    }
    const gotoUkrainianBlog = () => {
        navigate('/AcademyBlogs-Blog1')
    }



    return (
        <>
            <div className="blog-div" ref={scrollRef}>
                <div className="blog-heading">
                    <h2 className="blog-h mint">New High-Severity Vulnerabilities Discovered in Cisco IOx and F5 BIG-IP Products</h2>



                    <img></img>
                </div>

                <div className="back-to-home-link" onClick={gotoBlogs}>
                    <BsArrowLeft className="arrow" /> Back To Blogs
                </div>


                <div className="blog-p1">
                    <p className="blog-p1-p">F5 has warned of a high-severity flaw impacting BIG-IP appliances that could lead to denial-of-service (DoS) or arbitrary code execution.
                        <br /><br />  ESET attributed the attack to Sandworm, a nation-state group linked to Military Unit 74455 of the Main Intelligence Directorate of the General Staff of the Armed Forces of the Russian Federation (GRU).

                        <br /><br /> The issue is rooted in the iControl Simple Object Access Protocol ( <a href="https://www.f5.com/glossary/simple-object-access-protocol-soap" target='_blank'> SOAP </a> ) interface and affects the following versions of BIG-IP -
                        <ul>
                            <li style={{ textIndent: "20px", listStyle: "circle" }}>13.1.5</li>
                            <li style={{ textIndent: "20px", listStyle: "circle" }}>14.1.4.6 - 14.1.5</li>
                            <li style={{ textIndent: "20px", listStyle: "circle" }}> 15.1.5.1 - 15.1.8</li>
                            <li style={{ textIndent: "20px", listStyle: "circle" }}>16.1.2.2 - 16.1.3, and</li>
                            <li style={{ textIndent: "20px", listStyle: "circle" }}>17.0.0</li>
                        </ul>

                        <br /> <br />"A format string vulnerability exists in iControl SOAP that allows an authenticated attacker to crash the iControl SOAP CGI process or, potentially execute arbitrary code," the company <a href="https://my.f5.com/manage/s/article/K000130415" target='_blank'> said </a> in an advisory. "In appliance mode BIG-IP, a successful exploit of this vulnerability can allow the attacker to cross a security boundary."

                        <br /> <br />Tracked as CVE-2023-22374 (CVSS score: 7.5/8.5), security researcher Ron Bowes of Rapid7 has been credited with discovering and reporting the flaw on December 6, 2022.

                        <br /> <br />Given that the iCOntrol SOAP interface runs as root, a successful exploit could permit a threat actor to remotely trigger code execution on the device as the root user. This can be achieved by inserting arbitrary <a href="https://en.wikipedia.org/wiki/Printf_format_string#Type_field" target="_blank"> format string </a> characters into a query parameter that's passed to a logging function called syslog, Bowes <a href="https://www.rapid7.com/blog/post/2023/02/01/cve-2023-22374-f5-big-ip-format-string-vulnerability/" target='_blank'> said.</a>

                        <br /> <br /> F5 noted that it has addressed the problem in an engineering hotfix that is available for supported versions of BIG-IP. As a workaround, the company is recommending users restrict access to the iControl SOAP API to only trusted users.

                        <br /> <br /> <span style={{ fontSize: "20px", fontWeight: "900" }}>Cisco Patches Command Injection Bug in Cisco IOx</span>

                        <br /> <br />The disclosure comes as Cisco released updates to fix a flaw in Cisco IOx application hosting environment (CVE-2023-20076, CVSS score: 7.2) that could open the door for an authenticated, remote attacker to execute arbitrary commands as root on the underlying host operating system.

                        <br /> <br />   The <a href="https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-iox-8whGn5dL" target="_blank"> vulnerability </a> impacts devices running Cisco IOS XE Software and have the Cisco IOx feature enabled, as well as 800 Series Industrial ISRs, Catalyst Access Points, CGR1000 Compute Modules, IC3000 Industrial Compute Gateways, IR510 WPAN Industrial Routers.

                        <br /> <br />  Cybersecurity firm Trellix, which identified the issue, <a href="https://www.trellix.com/en-us/about/newsroom/stories/research/when-pwning-cisco-persistence-is-key-when-pwning-supply-chain-cisco-is-key.html" target="_blank"> said </a> it could be weaponized to inject malicious packages in a manner that can persist system reboots and firmware upgrades, leaving which can only be removed after a factory reset.

                        <br /> <br />"A bad actor could use CVE-2023-20076 to maliciously tamper with one of the affected Cisco devices anywhere along this supply chain," it said, warning of potential threats to the broader supply chain. "The level of access that CVE-2023-20076 provides could allow for backdoors to be installed and hidden, making the tampering entirely transparent for the end user."

                        <br /> <br /> While the exploit requires the attacker to be authenticated and have admin privileges, it's worth noting that adversaries can find a variety of ways to escalate privileges, such as phishing or by banking on the possibility that users may have failed to change the default credentials.

                        <br /> <br />Also discovered by Trellix is a <a href="https://thehackernews.com/2022/09/15-year-old-unpatched-python.html" target='_blank'> security check </a> bypass during <a href="https://www.trellix.com/en-us/about/newsroom/stories/research/trellix-advanced-research-center-patches-vulnerable-open-source-projects.html"> TAR archive extraction, </a> which could allow an attacker to write on the underlying host operating system as the root user.

                        <br /> <br />  The networking equipment major, which has since remediated the defect, said the vulnerability poses no immediate risk as "the code was put there for future application packaging support."
                    </p>
                </div>



                <div className="more-blogs-div">
                    <h1 className="more-blogs-h">More From Blogs </h1>
                    <section className="cards-wrapper">

                        <div className="card-grid-space">
                            <div className="num">01</div>
                            <a className="card box" onClick={gotoAtlassianBlog}>
                                <div>
                                    <h1>Atlassian's Jira Service Management Found Vulnerable to Critical Vulnerability</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoAtlassianBlog}>
                                            Read More
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card-grid-space">
                            <div className="num">02</div>
                            <a className=" card box" onClick={gotoGamblingBlog}>
                                <div>
                                    <h1>Experts Warn of 'Ice Breaker' Cyberattacks Targeting Gaming and Gambling Industry</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoGamblingBlog}>Read More</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card-grid-space">
                            <div className="num">03</div>
                            <a className=" card box" onClick={gotoUkrainianBlog}>
                                <div>
                                    <h1>Ukraine Hit with New Golang-based 'SwiftSlicer' Wiper Malware in Latest Cyber Attack</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoUkrainianBlog}>Read More</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </section>


                </div>


            </div>
        </>
    )
}


export default Report;