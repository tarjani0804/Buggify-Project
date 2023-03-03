import React, { useRef, useLayoutEffect } from 'react';
import './PentestingWithPython.css';
import Academy4 from '../image/academy4.png';
import HeathAdam from '../image/heathAdam.png';


const CourseDescription = () => {
    const scrollRef = useRef(null);
    useLayoutEffect(() => {
        if (scrollRef.current) {
            window.scrollTo(0, 0);
        }
    }, []);


    return (
        <>
            <div className='a-c-d' ref={scrollRef}>
                <div>
                    <h1 className='a-c-d-title-h'>Offensive Red Teaming</h1>

                    <div className='a-c-d-title-div'>

                        <div className='a-c-d-title-div1'>
                            <p className='a-c-d-title-p1'>
                                <span className='a-c-d-title-p1-span'>
                                    Course Overview
                                </span><br />

                                This course is designed to provide students with a practical understanding of the principles and techniques used in offensive red teaming. The course will cover the different phases of red teaming, including reconnaissance, vulnerability identification, exploitation, and post-exploitation. Students will also learn how to generate comprehensive reports and provide recommendations for remediation.

                            </p>
                            <p className='a-c-d-title-p2'>
                                <span className='a-c-d-title-p2-span'>
                                    Requirements
                                </span><br />
                                Penetration Testing Fundamentals course typically requires the following:
                                <ul className='a-c-d-title-p2-ol'>
                                    <li >
                                        Basic knowledge of computer systems and networks.
                                    </li>
                                    <li >
                                        Familiarity with computer programming concepts and languages.
                                    </li>
                                    <li >
                                        A computer with access to the internet.
                                    </li>
                                    <li >
                                        A willingness to learn and apply ethical hacking techniques.
                                    </li>
                                    <li>
                                        Familiarity with the Linux operating system is helpful but not required.
                                    </li>
                                </ul>
                                <br />
                                Please note that these requirements may vary depending on the provider and the specific course content. It is always recommended to check with the course provider for the most up-to-date and accurate information.
                            </p>

                        </div>
                        <div className='a-c-d-title-div2'>
                            <img src={Academy4} className='a-c-d-title-div2-img' />
                            <div className='button_ani a-c-d-title-div2-button'>
                                <button className='button2' >Buy Now</button>
                            </div>
                        </div>
                    </div>



                    <div className='a-c-d-syllabus'>
                        <p className='a-c-d-syllabus-h'>Course Syllabus:</p>

                        <ul className='a-c-d-syllabus-ul'>
                            <div className='column-ul'>
                                <li className='a-c-d-syallabus-h-li'>Module 1: Introduction to Offensive Red Teaming</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Overview of offensive red teaming</li>
                                    <li>Understanding the red teaming landscape</li>
                                    <li>Threat modeling and attack surface identification</li>
                                </ul>
                                <li className='a-c-d-syallabus-h-li'>Module 2: Information Gathering and Scanning</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Reconnaissance techniques for offensive red teaming</li>
                                    <li>Understanding the red teaming landscape</li>
                                    <li>Threat modeling and attack surface identification</li>
                                </ul>
                                <li className='a-c-d-syallabus-h-li'>Module 3: Vulnerability Assessment</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Understanding vulnerabilities in an organization's defenses</li>
                                    <li>Vulnerability assessment techniques and tools</li>
                                    <li>Automating vulnerability assessment</li>
                                </ul>
                                <li className='a-c-d-syallabus-h-li'>Module 4: Exploitation</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Introduction to exploitation techniques</li>
                                    <li>Common vulnerabilities and their exploitation</li>
                                    <li>Exploiting vulnerabilities with manual techniques and automated tools</li>
                                </ul>
                            </div>
                            <div className='column-ul'>
                                <li className='a-c-d-syallabus-h-li'>Module 5: Post-Exploitation Techniques</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Pivoting to other systems and applications</li>
                                    <li>Maintaining access to target systems</li>
                                    <li>Covering tracks and erasing evidence</li>
                                </ul>
                                <li className='a-c-d-syallabus-h-li'>Module 6:  Reporting and Remediation</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Writing effective red teaming reports</li>
                                    <li>Providing recommendations for remediation</li>
                                    <li>Working with clients to fix identified vulnerabilities</li>
                                </ul>
                                <li className='a-c-d-syallabus-h-li'>Module 7: Final Project</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Applying the knowledge gained from the course to complete a final project</li>
                                </ul>

                            </div>
                        </ul>
                    </div>
                    <div className='a-c-d-assessment'>
                        <p className='a-c-d-assessment-h'>Assessment:</p>
                        <ul className='a-c-d-assessment-ul'>
                            <li>In-class exercises and assignments</li>
                            <li>Final project showcasing the practical application of offensive red teaming</li>
                        </ul>
                    </div>
                    <div className='a-c-d-author'>
                        <p className='a-c-d-author-h'>About the Instructor:</p>
                        <div className='a-c-d-author-div'>
                            <div className='a-c-d-author-div1'>
                                <p className='a-c-d-author-div1-p1'>
                                    Hi everyone! My name is Heath Adams, but I also go by "The Cyber Mentor" on social media. I am the founder and CEO of TCM Security, an ethical hacking and cybersecurity consulting company. While I am an ethical hacker by trade, I love to teach! I have taught courses to over 170,000 students on multiple platforms, including Udemy, YouTube, Twitch, and INE. I am currently OSCP, OSWP, eCPPTX, eWPT, CEH, Pentest+, CCNA, Linux+, Security+, Network+, and A+ certified.
                                </p>
                                <p className='a-c-d-author-div1-p2'>
                                    <span>Follow Heath on Social Media: </span>
                                    <br /> LinkedIn - <a href='https://linkedin.com/in/heathadams' target="_blank"> https://linkedin.com/in/heathadams  </a> <br />
                                    Twitter - <a href='' target=''> https://twitter.com/thecybermentor </a>  <br />
                                    YouTube - <a href='' target=''>https://youtube.com/c/thecybermentor </a>  <br />
                                    Twitch - <a href='' target=''> https://twitch.tv/thecybermentor </a> <br />


                                </p>
                            </div>
                            <div className='a-c-d-author-div2'>
                                <img src={HeathAdam} className='a-c-d-author-div2-img' />

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default CourseDescription;
