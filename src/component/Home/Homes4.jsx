import React from 'react'
import './Homes4.css';
const Homes4 = () => {
    return (
        <>
            <div className='section-four'>
                <h3 className="section-four-h1 h1">For Researcher</h3>
                <h1 className="h section-four-h2">Break into Company’s Security & Earn Reward</h1>
                <p className="section-four-p">Buggify is an Bug Bounty Platform for Security Researchers where they can research on various security flaws in Target Companies and in-return they will be Rewarded with various things like Cash Prize, Swags, Badges, Reputation Points, etc.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    gridGap: "30px",
                    marginLeft: "12rem",
                    marginRight: "12rem",
                    marginTop: "5rem"
                }}>
                    <div className='section-four-div'>
                        <p className='section-four-div-p'>Buggify allows Security Researchers their showcase their skills and expertise to Secure Internet.</p>
                    </div>
                    <div className='section-four-div'>
                        <p className='section-four-div-p'>Researchers can contribute to the overall security of the internet by helping organizations identify and fix vulnerabilities before they can be exploited by malicious actors.</p>
                    </div>
                    <div className='section-four-div'>
                        <p className='section-four-div-p'>Bug bounty programs can provide researchers with access to a wider range of systems and applications to test, increasing their learning and development opportunities.</p>
                    </div>
                    <div className='section-four-div'>
                        <p className='section-four-div-p'>Researchers can earn by participating into Bug Bounty Program as well as they can help to secure some vulnerability disclosure program.</p>
                    </div>
                    <div className='section-four-div'>
                        <p className='section-four-div-p'>Bug bounty programs provide a structured and organized way for researchers to engage with organizations and report vulnerabilities.</p>
                    </div>
                    <div className='section-four-div'>
                        <p className='section-four-div-p' >A Great Researcher Community for better collaboration on various programs by Hunt-to-gather for finding more threat vectors as well as share knowledge as well as experiences during Meetup Events.</p>
                    </div>
                </div>
                );


            </div>
        </>
    )
}

export default Homes4;