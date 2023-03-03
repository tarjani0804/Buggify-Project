import React from "react";
import './AcademyDiscord.css';
import AcademyDiscord1 from '../image/AcademyDiscord1.jpg'
import { useNavigate } from "react-router-dom";

const AcademyDiscord = () => {

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
                        <li className="academy-nav-li" onClick={gotoAnnouncemenet}>
                            Announcement
                        </li>
                        <li className="academy-nav-li" onClick={gotoVideo}>
                            Videos
                        </li>
                        <li className="academy-nav-li" onClick={gotoBlogs}>
                            Blogs
                        </li>
                        <li className="academy-nav-li academy-nav-selected" onClick={gotoDiscord}>
                            Discord
                        </li>

                    </ul>


                </nav>

                <div className="academy-discord">
                    <h1 className="academy-discord-h">
                        Join Community on Discord
                    </h1>
                    <center>
                        <p className="academy-discord-p">
                            We Are a Diverse Community on Discord where topics
                            related to InfoSec are discussed. Other Chats
                            like Introduction, Course Query, Recent Trends,
                            Live Hacking Events, Security  Tool/Frameworks,
                            Career and  many other things are done
                            in a collaborative way.
                        </p>

                        <img src={AcademyDiscord1} className="academy-discord-img"></img>
                    </center>
                    <a href="https://discord.gg/d3UmFR9Z" target="_blank">
                        <div className="button_ani academy-discord-button" >

                            <button className="btn" >
                                Join Discord Server
                            </button>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default AcademyDiscord;