import React from "react";
import './Homes9.css'
import HomeBlogTwitter from '../image/HomeBlogTwitter.png';
import HomeBlogUkrainian from '../image/HomeBlogUkrainian.png';
import HomeBlogRecon from '../image/HomeBlogRecon.png';
import HomeBlogFire from '../image/HomeBlogFire.png';
import { useNavigate } from "react-router-dom";




const homes9 = () => {

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
            <div className="section-nine">
                <h3 className="h1">Blogs</h3>
                <h1 className="h">Read Latest Blogs About Current Trends in Security Industry</h1>
                <div className="section-nine-div">
                    <div className="section-nine-div-body">
                        <img src={HomeBlogUkrainian} alt="card image" className="section-nine-div-img" />
                        <div className="section-nine-div-body-p" >
                            <p className="section-nine-div-p">Ukraine Hit with New Golang-based 'SwiftSlicer' Wiper Malware in Latest Cyber Attack</p>
                        </div>
                        <div className="button_ani section-nine-div-button" onClick={gotoUkrainianBlog}><button className="btn">
                            Read More
                        </button></div>
                    </div>
                    <div className="section-nine-div-body div2">
                        <img src={HomeBlogTwitter} alt="card image" className="section-nine-div-img" />
                        <div className="section-nine-div-body-p" >
                            <p className="section-nine-div-p">New High-Severity Vulnerabilities Discovered in Cisco IOx and F5 BIG-IP Products</p>
                        </div>
                        <div className="button_ani section-nine-div-button" onClick={gotoCiscoVulernability}><button className="btn">
                            Read More
                        </button></div>
                    </div>
                    <div className="section-nine-div-body div3">
                        <img src={HomeBlogRecon} alt="card image" className="section-nine-div-img" />
                        <div className="section-nine-div-body-p" >
                            <p className="section-nine-div-p">Atlassian's Jira Service Management Found Vulnerable to Critical Vulnerability</p>
                        </div>
                        <div className="button_ani section-nine-div-button" onClick={gotoAtlassianBlog}><button className="btn">
                            Read More
                        </button></div>
                    </div>
                    <div className="section-nine-div-body div4">
                        <img src={HomeBlogFire} alt="card image" className="section-nine-div-img" />
                        <div className="section-nine-div-body-p" >
                            <p className="section-nine-div-p">Experts Warn of 'Ice Breaker' Cyberattacks Targeting Gaming and Gambling Industry</p>
                        </div>
                        <div className="button_ani section-nine-div-button" onClick={gotoGamblingBlog}><button className="btn">
                            Read More
                        </button></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default homes9;