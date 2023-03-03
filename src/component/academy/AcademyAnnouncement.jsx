import React from "react";
import './AcademyAnnouncement.css';
import { useNavigate } from "react-router-dom";



const AcademyAnnouncement = () => {

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
                <nav className="academy-nav">
                    <ul className="academy-nav-ul">

                        <li className="academy-nav-li" onClick={gotoGetStarted}>
                            Get Started with Hackacdemy
                        </li>
                        <li className="academy-nav-li" onClick={gotoCourses}>
                            Courses
                        </li>
                        <li className="academy-nav-li  academy-nav-selected" onClick={gotoAnnouncemenet}>
                            Announcement
                        </li>
                        <li className="academy-nav-li" onClick={gotoVideo}>
                            Videos
                        </li>
                        <li className="academy-nav-li" onClick={gotoBlogs}>
                            Blogs
                        </li>
                        <li className="academy-nav-li" onClick={gotoDiscord}>
                            Discord
                        </li>

                    </ul>


                </nav>
                <div className="academy-announcement">

                    <h1 className="academy-announcement-h">
                        Announcements
                    </h1>
                    <center>
                        <h3 className="academy-announcement-h2">New Academy Platform Release 1.0 - April 2023 </h3>
                        <p className="academy-announcement-p">To Empower Young Minds in the field of Cyber Security, Specifically in Offensive Security. We Are Bringing Our Latest Buggify InfoSec Academy to the Community. </p>
                        <p className="academy-announcement-p">We Are going to launch Some of the finest topics that makes individuals ready for industry based on Real World Experience of Topics like Web Application Security, Mobile Application Security, API Security, Cloud Security, Penetration Testing / VAPT, Red Teaming, Hardware & IoT Security and so on... </p>
                        <p className="academy-announcement-p">Our Highly Experienced Instructors & Proctors are eagerly waiting to see you on our Academic Platform.</p>
                    </center>
                </div>
            </div>
        </>
    )
}

export default AcademyAnnouncement;