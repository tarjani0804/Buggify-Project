import React, { useState, useEffect } from "react";
import './BusinessProfile.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdAddBusiness, MdSecurityUpdateGood } from 'react-icons/md';
import { VscReport } from 'react-icons/vsc';
import { BsPlusSquareDotted } from 'react-icons/bs';
import { RiUserSettingsLine, RiFileHistoryLine, RiLogoutBoxRLine, RiQuestionLine } from 'react-icons/ri';
import { TbReportAnalytics, TbReportSearch } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SiBigbluebutton } from 'react-icons/si';
import { useNavigate } from "react-router-dom";
import { FaSearchMinus } from 'react-icons/fa';
import Avat from '../image/avat1.png';


function DashboardNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const Navigate = useNavigate();
    const gotoBusinessProfile = () => {
        Navigate('/businessProfile')
    };
    const gotoScopeSetting = () => {
        Navigate('/ScopeSetting')
    };
    const gotoBugReport = () => {
        Navigate('/bugReport')
    };
    const gotoRewardUpdate = () => {
        Navigate('/rewardUpdate')
    };
    const gotoRetesting = () => {
        Navigate('/Retesting')
    };
    const gotoBountyPayment = () => {
        Navigate('/BountyPayment')
    };
    const gotoPreviousFinding = () => {
        Navigate('/PreviousFinding')
    };
    const gotoDashboardSetting = () => {
        Navigate('/DashboardSetting')
    };
    const gotoFAQs = () => {
        Navigate('/FAQs')
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
                <li onClick={gotoBusinessProfile}>
                    <span className="navbar-menu-icon"><MdAddBusiness /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Business Profile</span>}
                </li>
                <li onClick={gotoScopeSetting}>
                    <span className="navbar-menu-icon" style={{ color: "#ffffff" }}><RiUserSettingsLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Scope Setting</span>}
                </li>
                <li onClick={gotoBugReport}>
                    <span className="navbar-menu-icon"><VscReport /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Bug Reports</span>}
                </li>
                <li onClick={gotoRewardUpdate}>
                    <span className="navbar-menu-icon"><MdSecurityUpdateGood /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Reward Update</span>}
                </li>
                <li onClick={gotoRetesting} className="dashboard-link">
                    <span className="navbar-menu-icon"><BsPlusSquareDotted /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Retesting</span>}
                </li>
                <li onClick={gotoBountyPayment}>
                    <span className="navbar-menu-icon"><RiFileHistoryLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Bounty Payment Details</span>}
                </li>
                <li onClick={gotoPreviousFinding}>
                    <span className="navbar-menu-icon"><TbReportAnalytics /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Previous finding</span>}
                </li>
                <li >
                    <span className="navbar-menu-icon"><RiLogoutBoxRLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
                </li>
                <hr className={`navbar-hr ${isMenuOpen ? 'open' : ''}`} />
                <li onClick={gotoDashboardSetting}>
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

    const [query, setQuery] = useState('');

    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    async function handleSearchClick() {
        const results = await searchDatabase(query);
        // Do something with the results, e.g. update a state variable
    }
    const handleSubmit = () => {

    }

    return (

        <>

            <div className="bus-profile">

                <div className="bus-profile-divs">
                    <div className="bus-profile-div1">
                        <DashboardNavbar />
                    </div>
                    <div className="bus-profile-div2">
                        <center><h1 className="bus-profile-div2-h">Retesting</h1>
                            <div className="bus-profile-header">
                                <img src={Avat} className="bus-profile-company-logo" />
                                <h3 className="bus-profile-company-name">{props.companyName}</h3>
                            </div></center>
                        <div className="stats">
                            <p className="bus-profie-stat-h">Search Report by Report Unique Identification Number fot Retesting</p>

                            <form className="dashboard-form">
                                <div className="column-div1">

                                    <input className="dashboard-reward-update-input"
                                        type="text"
                                        value={query}
                                        onChange={handleInputChange}
                                        placeholder="Enter Report Id :"
                                    // onChange={(event) => setReportSearch(event.target.value)}
                                    />
                                    <div>
                                        <button className="search-button" onClick={handleSearchClick}><FaSearchMinus /></button>
                                    </div>
                                </div>
                            </form>

                            /*  report div */




                            <div className="report-div">
                                <div className="bus-profile-bug-report-divtitle">
                                    <p className="bus-profile-bug-report-div-title-p">Report Title: {props.reportTitle}</p>
                                    <p className="bus-profile-bug-report-div-id-p">Report Id: {props.reportId}</p>
                                </div>
                                <div className="report-steps">

                                    <p className="bus-profile-bug-report-div-title-p">Steps to Reproduce :
                                        {(BusinessProfile.defaultProps.reportSteps.map((report) => (
                                            <li className="report-div-steps-li" key={report.id}>{report.li}</li>
                                        )))}
                                    </p>

                                </div>

                                <div className="report-proof">
                                    <p className="bus-profile-bug-report-div-title-p">Proof-of-Concept :</p>
                                    <p className="report-proof-link-of-poc">Link of POC screenshot: {props.linkOfPOC}</p>
                                    {(BusinessProfile.defaultProps.pocLink.map((poclink) => (
                                        <p className="report-proof-link-of-poc" key={poclink.id} >Additional Link :{poclink.li}
                                        </p>
                                    )))}
                                </div>
                                <div className="report-proof">
                                    <p className="bus-profile-bug-report-div-title-p">CVSS Score: {props.CvssScore}</p>
                                </div>
                                <div className="report-proof">
                                    <p className="bus-profile-bug-report-div-title-p">Attack Scenario:  </p>
                                    <p className="report-proof-link-of-poc">{props.attack}</p>
                                </div>
                                <div className="report-proof">
                                    <p className="bus-profile-bug-report-div-title-p">Remediation: </p>
                                    <p className="report-proof-link-of-poc">{props.remedi}</p>
                                </div>
                                <div className="report-proof">
                                    <p className="bus-profile-bug-report-div-title-p">Note by Company: </p>
                                    <p className="report-note-p"> {props.nbc}</p>
                                </div>
                            </div>

                            <div className="button_ani retesting-button">
                                <button className="btn" onClick={handleSubmit}>Request for Retesting</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}


BusinessProfile.defaultProps = {
    companyLogo: '',
    companyName: 'Company',
    reportTitle: 'Reflected XSS in search field of abc.def.com',
    reportId: '#a7ag3-jh48g',
    reportSteps: [
        {
            id: '1',
            li: 'Search field of https://abc.def.com/page?search=abc',
        },
        {
            id: '2',
            li: 'Replace Payload ???><script>alert(document.cookie);</script> with abc in search parameter ',
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
    linkOfPOC: 'https://drive.amazing.com ',
    pocLink: [
        {
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
    CvssScore: 'Low (3.0 CVSS)',
    attack: "djcbjsdbcshdbcuijskdbvyufdhvbyudfh",
    remedi: "wkssalmkdcnfhgryhdsjkehysgdfxjkr",
    nbc: "We have successfully fixed bug.We Encourage you to ensure fix of bug is working or not, and if still there is any vulnerability found, Reference this Report ID and Report as new bug.Thank you for Securing Def Limited.Based on CVSS calculation score 2.4, you will be awarded with 300$ Bounty.Please send us your banking detail at secure @def.com with Report ID and Proofs mentioned in Payout Policy as per regulations.",
}


export default BusinessProfile;







