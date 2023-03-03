import React from "react";
import './AcademyVideos.css';
import ReactPlayer from 'react-player';
import { useNavigate } from "react-router-dom";



const AcademyVideos = () => {

    const video = [
        { title: 'Learn with Remonsec: How to approach sensitive information disclosure.', url: 'https://youtu.be/0EyVb0x-oJU' },
        { title: 'Frans Rosén Keynote at BSides Ahmedabad', url: 'https://youtu.be/rAuuN0OohJc' },
        { title: 'Stok’s BSides Ahmedabad Talk on Buggify for Security Researchers', url: 'https://youtu.be/8QlWyOPVEak' },
        { title: 'kavisha Seth Talks About Amazon Cognito (Mis)Configurations', url: 'https://youtu.be/LmTzIKk8K4A' },
        { title: 'Farah Hawa’s Bug Bounty Journey', url: 'https://youtu.be/ug7FzoByLFc' },
    ];

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
                        <li className="academy-nav-li academy-nav-selected" onClick={gotoVideo}>
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
                <div className="academy-videos">

                    <h1 className="academy-videos-section1-h">Community Videos</h1>


                    <div className="academy-videos-div" >
                        {video.map((video) => (
                            <center>
                                <div key={video.url} className="academy-videos-vi" >
                                    <h2 className="academy-videos-h">{video.title}</h2>
                                    <ReactPlayer url={video.url} width="100%" height="100%" />
                                </div>
                            </center>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcademyVideos;