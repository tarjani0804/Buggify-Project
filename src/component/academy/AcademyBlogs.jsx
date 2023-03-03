import React, { useState, useEffect } from "react";
import './AcademyBlogs.css';
import HomeBlogTwitter from '../image/HomeBlogTwitter.png';
import HomeBlogUkrainian from '../image/HomeBlogUkrainian.png';
import HomeBlogRecon from '../image/HomeBlogRecon.png';
import HomeBlogFire from '../image/HomeBlogFire.png';


import { useNavigate } from "react-router-dom";

const AcademyBlogs = () => {
    const blog = [
        {
            id: 1,
            imgSrc: HomeBlogUkrainian,
            title: "Ukraine Hit with New Golang-based 'SwiftSlicer' Wiper Malware in Latest Cyber Attack",
            link: "/AcademyBlogs-Blog1"
        },
        {
            id: 2,
            imgSrc: HomeBlogTwitter,
            title: "New High-Severity Vulnerabilities Discovered in Cisco IOx and F5 BIG-IP Products",
            link: "/AcademyBlogs-Blog2"
        },
        {
            id: 3,
            imgSrc: HomeBlogRecon,
            title: "Atlassian's Jira Service Management Found Vulnerable to Critical Vulnerability",
            link: "/AcademyBlogs-Blog3"
        },
        {
            id: 4,
            imgSrc: HomeBlogFire,
            title: "Experts Warn of 'Ice Breaker' Cyberattacks Targeting Gaming and Gambling Industry",
            link: "/AcademyBlogs-Blog4"
        },
        // ... other blog data objects
    ];


    const goto = (redirectLink) => {
        Navigate(redirectLink);
    }



    const Navigate = useNavigate();
    const gotoGetStarted = () => {
        Navigate('/AcademyGetStarted');
    }
    const gotoCourses = () => {
        Navigate('/AcademyCourses');
    }
    const gotoAnnouncemenet = () => {
        Navigate('/AcademyAnnouncement');
    }
    const gotoVideo = () => {
        Navigate('/AcademyVideos');
    }
    const gotoBlogs = () => {
        Navigate('/AcademyBlogs');
    }
    const gotoDiscord = () => {
        Navigate('/AcademyDiscord');
    }


    return (

        <>




            <div className="nav">
                <nav className="academy-na">
                    <ul className="academy-nav-ul">

                        <li className="academy-nav-li" onClick={gotoGetStarted}>
                            Get Started with Hackacdemy
                        </li>
                        <li className="academy-nav-li" onClick={gotoCourses}>
                            Courses
                        </li>
                        <li className="academy-nav-li" onClick={gotoAnnouncemenet}>
                            Announcement
                        </li>
                        <li className="academy-nav-li" onClick={gotoVideo}>
                            Videos
                        </li>
                        <li className="academy-nav-li academy-nav-selected" onClick={gotoBlogs}>
                            Blogs
                        </li>
                        <li className="academy-nav-li" onClick={gotoDiscord}>
                            Discord
                        </li>

                    </ul>


                </nav>

                <div className="academy-blog">

                    <div >
                        {blog.map((blog) => (
                            <div className="academy-blog-card" key={blog.id} >
                                <div className="academy-blog-card-body" >
                                    <div className="academy-blog-card-img">
                                        <img src={blog.imgSrc} alt={blog.title} className="academy-card-img" />
                                    </div>
                                    <div className="academy-blog-card-text">
                                        <h3 className="academy-card-h">{blog.title}</h3>
                                        <p className="academy-card-p">{blog.description}</p>                                    </div>
                                    <div className="button_ani blog-card-button" onClick={() => goto(blog.link)} >
                                        <button className="btn">Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};


export default AcademyBlogs;