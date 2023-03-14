import React, { useRef, useLayoutEffect } from "react";
import './Blog.css';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Blog_Glambling from '../image/blog_gambling.png'
import Blog4 from '../image/Blog/Blog_4.png';
import Blog4_1 from '../image/Blog/Blog_4-1.png';


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
                <div className="hero">
                    <div className="blog-heading hero-content">
                        <h1 className="hero__title blog-h mint">Experts Warn of 'Ice Breaker' Cyberattacks Targeting Gaming and Gambling Industry</h1>

                    </div>
                </div>

                <div className="back-to-home-link" onClick={gotoBlogs}>
                    <BsArrowLeft className="arrow" /> Back To Blogs
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr"
                }}>
                    <div className="blog-p1">
                        <p className="blog-p1-p">
                            <br /><br />  A new attack campaign has been targeting the gaming and gambling sectors since at least September 2022, just as the <a href="https://www.icelondon.uk.com/" target='_blank'> ICE London 2023 </a> gaming industry trade fair event is scheduled to kick off next week.

                            <br /><br />  Israeli cybersecurity company Security Joes is tracking the activity cluster under the name Ice Breaker, stating the intrusions employ clever social engineering tactics to deploy a JavaScript backdoor.

                            <br /><br />  The attack sequence proceeds as follows: The threat actor poses as a customer while initiating a conversation with a support agent of a gaming company under the pretext of having account registration issues. The adversary then urges the individual on the other end to open a screenshot image hosted on Dropbox.

                            <br /><br />Security Joes  <a href="https://www.securityjoes.com/post/operation-ice-breaker-targets-the-gam-bl-ing-industry-right-before-it-s-biggest-gathering" target='_blank'> said </a> that the threat actor is "well-aware of the fact that the customer service is human-operated."

                            <br /><br />Clicking the purported screenshot link sent in the chat leads to the retrieval of an LNK payload or, alternatively, a VBScript file as a backup option, the former of which is configured to download and run an MSI package containing a Node.js implant.
                        </p>
                    </div>
                    <div className="blog-p2" style={{ marginTop: "20rem", marginRight: "10rem" }}>
                        <img src={Blog4} ></img>
                    </div>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 3fr"
                }}>



                    <div className="blog-p2" style={{
                        marginLeft: "12rem",
                        marginTop: "20rem"
                    }}>
                        <img src={Blog4_1} ></img>
                    </div>
                    <div className="blog-p2">
                        <p className="blog-p1-p">
                            The JavaScript file has all the features of a typical backdoor, enabling the threat actor to enumerate running processes, steal passwords and cookies, exfiltrate arbitrary files, take screenshots, run VBScript imported from a remote server, and even open a reverse proxy on the compromised host.

                            <br /><br />       Should the VBS downloader be executed by the victim, the infection culminates in the deployment of <a href="https://malpedia.caad.fkie.fraunhofer.de/details/win.houdini" target='_blank'> Houdini, </a> a VBS-based remote access trojan that dates back to 2013.

                            <br /><br /> The threat actors' origins are currently unknown, although they have been observed using broken English during their conversations with customer service agents. Some indicators of compromise (IoCs) associated with the campaign were <a href="https://twitter.com/malwrhunterteam/status/1576984214351724546" target='_blank'> previously shared </a> by the MalwareHunterTeam in October 2022.

                            <br /><br /> "This is a highly effective attack vector for the gaming and gambling industry," Felipe Duarte, senior threat researcher at Security Joes, said.

                            <br /><br />"The never-seen-before compiled JavaScript second stage malware is highly complex to dissect, showing that we are dealing with a skilled threat actor with the potential of being sponsored by an interest owner."


                        </p>
                    </div>

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