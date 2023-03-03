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
                    <h2 className="blog-h mint">Atlassian's Jira Service Management Found Vulnerable to Critical Vulnerability</h2>



                    <img></img>
                </div>

                <div className="back-to-home-link" onClick={gotoBlogs}>
                    <BsArrowLeft className="arrow" /> Back To Blogs
                </div>


                <div className="blog-p1">
                    <p className="blog-p1-p">Atlassian has released fixes to resolve a critical security flaw in Jira Service Management Server and Data Center that could be abused by an attacker to pass off as another user and gain unauthorized access to susceptible instances.

                        <br /><br />The <a href="https://confluence.atlassian.com/security/january-2023-security-advisories-overview-1207183418.html" target='_blank'> vulnerability </a> is tracked as <a href="https://nvd.nist.gov/vuln/detail/CVE-2023-22501" target='_blank'> CVE-2023-22501 </a> (CVSS score: 9.4) and has been described as a case of broken authentication with low attack complexity.

                        <br /><br />  "An authentication vulnerability was discovered in Jira Service Management Server and Data Center which allows an attacker to impersonate another user and gain access to a Jira Service Management instance under certain circumstances," Atlassian <a href="https://confluence.atlassian.com/jira/jira-service-management-server-and-data-center-advisory-cve-2023-22501-1188786458.html" target='_blank'> said.</a>

                        <br /><br />  "With write access to a User Directory and outgoing email enabled on a Jira Service Management instance, an attacker could gain access to signup tokens sent to users with accounts that have never been logged into."

                        <br /><br />The tokens, Atlassian noted, can be obtained in either of the two scenarios -
                        <ul>
                            <li style={{ textIndent: "20px" }}> If the attacker is included on Jira issues or requests with these users, or </li>
                            <li style={{ textIndent: "20px" }}> If attacker is forwarded or otherwise gains access to emails containing a "View Request" link from these users </li>
                        </ul>
                        <br /> It also <a href="https://confluence.atlassian.com/kb/faq-for-cve-2023-22501-1189797488.html" target='_blank'> cautioned </a> that while users who are synced to the Jira service via read-only User Directories or single sign-on (SSO) are not affected, external customers who interact with the instance via email are affected, even when SSO is configured.
                        <br /> <br />The Australian software services provider said the vulnerability was introduced in version 5.3.0 and impacts all subsequent versions 5.3.1, 5.3.2, 5.4.0, 5.4.1, and 5.5.0. Fixes have been made available in versions 5.3.3, 5.3.3, 5.5.1, and 5.6.0 or later.

                        <br /> <br /> Atlassian emphasized that Jira sites hosted on the cloud via an atlassian[.]net domain are not affected by the flaw and that no action is required in this case.

                        <br /> <br /> The disclosure arrives more than two months after the company closed two critical security holes Bitbucket Server, Data Center, and Crowd products ( <a href="https://thehackernews.com/2022/11/atlassian-releases-patches-for-critical.html" target='_blank' > CVE-2022-43781 and CVE-2022-43782 </a> ) that could be exploited to gain code execution and invoke privileged API endpoints.

                        <br /> <br /> With flaws in Atlassian products becoming an <a href="https://thehackernews.com/2022/09/hackers-targeting-unpatched-atlassian.html" target='_blank'> alluring</a> <a href="https://thehackernews.com/2022/10/cisa-warns-of-hackers-exploiting.html" target='_blank' > attack vector </a> in recent months, it's crucial that users upgrade their installations to the latest versions to mitigate potential threats.
                    </p>
                </div>



                <div className="more-blogs-div">
                    <h1 className="more-blogs-h">More From Blogs </h1>
                    <section className="cards-wrapper">
                        <div className="card-grid-space">
                            <div className="num">01</div>
                            <a className="card box" onClick={gotoCiscoVulernability}>
                                <div>
                                    <h1>New High-Severity Vulnerabilities Discovered in Cisco IOx and F5 BIG-IP Products</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoCiscoVulernability}>Read More</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card-grid-space">
                            <div className="num">02</div>
                            <a className=" card box" onClick={gotoUkrainianBlog}>
                                <div>
                                    <h1>Ukraine Hit with New Golang-based 'SwiftSlicer' Wiper Malware in Latest Cyber Attack</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoUkrainianBlog}>Read More</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card-grid-space">
                            <div className="num">03</div>
                            <a className=" card box" onClick={gotoGamblingBlog}>
                                <div>
                                    <h1>Experts Warn of 'Ice Breaker' Cyberattacks Targeting Gaming and Gambling Industry</h1>

                                    <div className="tags">
                                        <div className="tag" onClick={gotoGamblingBlog}>Read More</div>
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