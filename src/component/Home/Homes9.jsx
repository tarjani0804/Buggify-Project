import React from "react";
import './Homes9.css'
import HomeBlogTwitter from '../image/HomeBlogTwitter.png';
import HomeBlogUkrainian from '../image/HomeBlogUkrainian.png';
import HomeBlogRecon from '../image/HomeBlogRecon.png';
import HomeBlogFire from '../image/HomeBlogFire.png';

const homes9 = () => {
    return (
        <>
            <div className="section-nine">
                <h3 className="h1">Blogs</h3>
                <h1 className="h">Read Latest Blogs About Current Trends in Security Industry</h1>
                <div className="section-nine-div">
                    <div className="section-nine-div-body">
                        <img src={HomeBlogTwitter} alt="card image" className="section-nine-div-img" />
                        <div className="section-nine-div-body-p" >
                            <p className="section-nine-div-p"> Twitter’s 400M Users Data on Sale in Darknet</p>
                        </div>
                        <div className="button_ani section-nine-div-button"><button className="btn">
                            Read More
                        </button></div>
                    </div>
                    <div className="section-nine-div-body div2">
                        <img src={HomeBlogUkrainian} alt="card image" className="section-nine-div-img" />
                        <div className="section-nine-div-body-p" >
                            <p className="section-nine-div-p"> Ukrainian Govt. Infrastructure Targeted by Chinese Hackers</p>
                        </div>
                        <div className="button_ani section-nine-div-button"><button className="btn">
                            Read More
                        </button></div>
                    </div>
                    <div className="section-nine-div-body div3">
                        <img src={HomeBlogRecon} alt="card image" className="section-nine-div-img" />
                        <div className="section-nine-div-body-p" >
                            <p className="section-nine-div-p">ReconJET - Reconnaisance Tool Released by Buggify</p>
                        </div>
                        <div className="button_ani section-nine-div-button"><button className="btn">
                            Read More
                        </button></div>
                    </div>
                    <div className="section-nine-div-body div4">
                        <img src={HomeBlogFire} alt="card image" className="section-nine-div-img" />
                        <div className="section-nine-div-body-p" >
                            <p className="section-nine-div-p">Fire Rescue Victoria Confirms Cyber Attack</p>
                        </div>
                        <div className="button_ani section-nine-div-button"><button className="btn">
                            Read More
                        </button></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default homes9;