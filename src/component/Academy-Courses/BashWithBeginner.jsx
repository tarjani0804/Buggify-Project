import React, { useLayoutEffect, useRef } from 'react';
import './PentestingWithPython.css';
import Academy2 from '../image/academy2.png';
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
                    <h1 className='a-c-d-title-h'>Bash for Beginners</h1>

                    <div className='a-c-d-title-div'>

                        <div className='a-c-d-title-div1'>
                            <p className='a-c-d-title-p1'>
                                <span className='a-c-d-title-p1-span'>
                                    Course Overview
                                </span><br />
                                This course is designed for individuals who have little or no experience with the Linux command line interface and want to learn how to use the Bash shell. The course will cover the basics of Bash scripting, how to navigate the Linux file system, managing files and directories, and working with Linux utilities and commands.


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
                            <img src={Academy2} className='a-c-d-title-div2-img' />
                            <div className='button_ani a-c-d-title-div2-button'>
                                <button className='button2' >Buy Now</button>
                            </div>
                        </div>
                    </div>



                    <div className='a-c-d-syllabus'>
                        <p className='a-c-d-syllabus-h'>Course Syllabus:</p>

                        <ul className='a-c-d-syllabus-ul'>
                            <div className='column-ul'>
                                <li className='a-c-d-syallabus-h-li'>Module 1: Introduction to Bash </li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Overview of the Bash shell</li>
                                    <li>Bash syntax and scripting basics</li>
                                    <li>Introduction to the Linux file system</li>
                                </ul>
                                <li className='a-c-d-syallabus-h-li'>Module 2: Navigating the File System</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Understanding the Linux file system</li>
                                    <li>Navigating the file system with Bash</li>
                                    <li>Using Bash to create, move, and delete files and directories</li>
                                </ul>
                                <li className='a-c-d-syallabus-h-li'>Module 3: Managing Files and Directories</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Basic file management with Bash</li>
                                    <li>Advanced file management with Bash</li>
                                    <li>Working with permissions and ownership in Bash</li>

                                </ul>
                            </div>
                            <div className='column-ul'>
                                <li className='a-c-d-syallabus-h-li'>Module 4: Working with Utilities and Commands</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Understanding Linux utilities and commands</li>
                                    <li>Using Bash to execute commands</li>
                                    <li>Using pipes and redirects with Bash</li>
                                </ul>


                                <li className='a-c-d-syallabus-h-li'>Module 5: Bash Scripting</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Basics of Bash scripting</li>
                                    <li>Variables and data types in Bash</li>
                                    <li>Control flow and looping in Bash</li>
                                </ul>
                                <li className='a-c-d-syallabus-h-li'>Module 6: Final Project</li>
                                <ul className='a-c-d-syllabus-second-ul'>
                                    <li>Applying the knowledge gained from the course to complete a final project</li>
                                    <li>Common countermeasures</li>
                                    <li>Bypassing countermeasures with Python</li>
                                </ul>


                            </div>
                        </ul>
                    </div>
                    <div className='a-c-d-assessment'>
                        <p className='a-c-d-assessment-h'>Assessment:</p>
                        <ul className='a-c-d-assessment-ul'>
                            <li>In-class exercises and assignments</li>
                            <li>Final project showcasing the practical application of Bash scripting</li>
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

                </div >
            </div >
        </>
    );
}

export default CourseDescription;
