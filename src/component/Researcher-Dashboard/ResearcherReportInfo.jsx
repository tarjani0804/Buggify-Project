import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { BsJournalBookmark } from 'react-icons/bs';
import { RiFolderHistoryLine, RiLogoutBoxRLine, RiQuestionLine } from 'react-icons/ri';
import { IoSettingsOutline, IoNotificationsSharp } from 'react-icons/io5';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SiBigbluebutton } from 'react-icons/si';
import { ImProfile } from 'react-icons/im';
import { TbReportSearch } from 'react-icons/tb';
import Avat from '../image/avat1.png';
import { useNavigate } from "react-router-dom";

function ResearcherNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const Navigate = useNavigate();
    const gotoResearcherProfile = () => {
        Navigate('/researcherProfile')
    };
    const gotoTrackReports = () => {
        Navigate('/track-report')
    };
    const gotoBuountyHistory = () => {
        Navigate('/bounty-history')
    };
    const gotoBookmarkedProgram = () => {
        Navigate('/bookmarked-program')
    };
    const gotoNotification = () => {
        Navigate('/dashboard-notification')
    };
    const gotoSetting = () => {
        Navigate('/dashboard-settings')
    };

    const gotoFAQs = () => {
        Navigate('/researcherFAQs')
    }

    return (
        <nav className={`navbar ${isMenuOpen ? 'open' : 'close'}`}>

            <div className={`navbar-toggle ${isMenuOpen ? 'navopen' : 'navclose'}`} onClick={handleMenuToggle}>
                {isMenuOpen ? <FiChevronLeft /> : <FiChevronRight />}
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <li >
                    <span className="back-link-icon navbar-menu-icon"><AiOutlineArrowLeft /></span>
                    {isMenuOpen && <span className="back-link navbar-menu-item">Back to Home</span>}
                </li>
                <hr className={`navbar-hr ${isMenuOpen ? 'open' : ''}`} />
                <li onClick={gotoResearcherProfile}>
                    <span className="navbar-menu-icon"><ImProfile /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Researcher Profile</span>}
                </li>
                <li className="dashboard-link" onClick={gotoTrackReports}>
                    <span className="navbar-menu-icon" style={{ color: "#ffffff" }}><TbReportSearch /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Track Report</span>}
                </li>

                <li onClick={gotoBuountyHistory}>
                    <span className="navbar-menu-icon"><RiFolderHistoryLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Bounty History</span>}
                </li>
                <li onClick={gotoBookmarkedProgram}>
                    <span className="navbar-menu-icon"><BsJournalBookmark /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Bookmarked Program</span>}
                </li>
                <li onClick={gotoNotification}>
                    <span className="navbar-menu-icon"><IoNotificationsSharp /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Notification</span>}
                </li>
                <li >
                    <span className="navbar-menu-icon"><RiLogoutBoxRLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
                </li>
                <hr className={`navbar-hr ${isMenuOpen ? 'open' : ''}`} />


                <li onClick={gotoSetting}>
                    <span className="navbar-menu-icon"><IoSettingsOutline /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Settings</span>}
                </li>
                <li onClick={gotoFAQs}>
                    <span className="navbar-menu-icon"><RiQuestionLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">FAQs</span>}
                </li>
            </ul>

        </nav>);

}

const BusinessProfile = (props) => {


    return (
        <>

            <div className="bus-profile">

                <div className="bus-profile-divs">
                    <div className="bus-profile-div1">
                        <ResearcherNavbar />
                    </div>
                    <div className="bus-profile-div2">
                        <center><h1 className="bus-profile-div2-h">Bug Report</h1></center>
                        <div className="dashboard">
                            <center>  <div className="bus-profile-header">
                                <img src={Avat} className="bus-profile-company-logo" />
                                <h3 className="bus-profile-company-name">{props.companyName}</h3>
                            </div>
                            </center>

                            <div className="bus-profile-report-update">

                                <div className="bus-profile-bug-report-divtitle" >
                                    <p className="bus-profile-bug-report-div-title-p">Report Title: {props.reportTitle} </p>
                                    <p className="bus-profile-bug-report-div-id-p" >Report Id: {props.reportId} </p>
                                </div>

                            </div>
                            <div className="bus-profile-report-update">

                                <div className="bus-profile-report-update-steps">

                                    <p className="bus-profile-bug-report-div-title-p">Steps to Reproduce :
                                        {(BusinessProfile.defaultProps.reportSteps.map((report) => (
                                            <li className="report-div-steps-li" key={report.id}>{report.li}</li>
                                        )))}
                                    </p>

                                </div>

                                <div className="report-proof">
                                    <p className="bus-profile-bug-report-div-title-p">Proof-of-Concept :</p>
                                    {(BusinessProfile.defaultProps.pocLink.map((poclink) => (
                                        <p className="report-proof-link-of-poc" key={poclink.id} >Additional Link :{poclink.li}
                                        </p>
                                    )))}
                                </div>
                                <div className="report-proof">
                                    <p className="bus-profile-bug-report-div-title-p">Attack Scenario: </p>
                                    <p className="report-proof-link-of-poc"> {props.attack} </p>
                                </div>
                                <div className="report-proof">
                                    <p className="bus-profile-bug-report-div-title-p">Remediation: </p>
                                    <p className="report-proof-link-of-poc"> {props.remeda} </p>
                                </div>


                            </div>




                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

BusinessProfile.defaultProps = {
    companyLogo: '',
    companyName: 'Company',
    reportId: '#a7ag3-jh38g',
    reportTitle: 'XSS in Search Field of abc.def.com',
    reportSteps: [
        {
            id: '1',
            li: 'Search field of https://abc.def.com/page?search=abc',
        },
        {
            id: '2',
            li: 'Replace Payload “><script>alert(document.cookie);</script> with abc in search parameter ',
        },
        {
            id: '3',
            li: 'Entering this payload will show alert popup having cookie of current user ',
        },
        {
            id: '4',
            li: 'bkfaeb',
        },
        {
            id: '5',
            li: ' iflakenflkan ',
        },
        {
            id: '6',
            li: 'flaflakefa',
        },
        {
            id: '7',
            li: ' akfvajfuafka',
        },
    ],
    pocLink: [{
        id: '1',
        li: 'link1',
    },
    {
        id: '2',
        li: 'link2 ',
    },
    {
        id: '3',
        li: 'link3 ',
    },
    {
        id: '4',
        li: 'link4',
    },

    ],
    attack: "bfcjbfjhreufhvnjkehuf",
    remeda: "njsagysgbcfysgbyxgbygbidsx",




}





export default BusinessProfile;
