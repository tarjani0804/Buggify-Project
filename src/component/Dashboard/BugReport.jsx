import React, { useState, useEffect } from "react";
import './BusinessProfile.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdAddBusiness, MdSecurityUpdateGood } from 'react-icons/md';
import { VscReport } from 'react-icons/vsc';
import { BsPlusSquareDotted } from 'react-icons/bs';
import { RiUserSettingsLine, RiFileHistoryLine, RiLogoutBoxRLine, RiQuestionLine } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SiBigbluebutton } from 'react-icons/si';
import { useNavigate } from "react-router-dom";

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
                <li>
                    <span className="company-icon navbar-menu-icon"><SiBigbluebutton /></span>
                    {isMenuOpen && <p className="company-name navbar-menu-item ">Buggify</p>}
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
                <li onClick={gotoBugReport} className="dashboard-link">
                    <span className="navbar-menu-icon"><VscReport /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Bug Reports</span>}
                </li>
                <li onClick={gotoRewardUpdate}>
                    <span className="navbar-menu-icon"><MdSecurityUpdateGood /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Reward Update</span>}
                </li>
                <li onClick={gotoRetesting}>
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

    const navigate = useNavigate()
    const gotoReportInfoUpdate = () => {
        navigate('/ReportInfoUpdate')
    }


    return (
        <>

            <div className="bus-profile">

                <div className="bus-profile-divs">
                    <div className="bus-profile-div1">
                        <DashboardNavbar />
                    </div>
                    <div className="bus-profile-div2">
                        <center><h1 className="bus-profile-div2-h">Bug Report</h1>
                            <div className="dashboard">
                                <center><div className="bus-profile-header">
                                    <img src={props.companyLogo} className="bus-profile-company-logo" />
                                    <h3 className="bus-profile-company-name">{props.companyName}</h3>
                                </div></center>
                                <div className="stats">
                                    <p className="bus-profie-stat-h">Active Bug Reports</p>
                                    <div className="bus-profile-bug-report">

                                        {(BusinessProfile.defaultProps.reports.map((title) => (
                                            <div key={title.id} className="bus-profile-bug-report-div">
                                                <div className="bus-profile-bug-report-divtitle">
                                                    <p className="bus-profile-bug-report-div-title-p">Report Title: {title.reportTitle}</p>
                                                    <p className="bus-profile-bug-report-div-id-p">Report Id: {title.reportId}</p>
                                                </div>
                                                <p className="bus-profile-bug-report-div-link1" onClick={gotoReportInfoUpdate}>Check Report</p>
                                            </div>
                                        )))}
                                    </div>

                                </div>
                            </div>
                        </center>



                    </div>
                </div>
            </div>

        </>
    )
}

BusinessProfile.defaultProps = {
    companyLogo: '',
    companyName: 'Company',
    reports: [
        {
            id: '1',
            reportId: '#a7ag3-jh38g',
            reportTitle: 'XSS in Search Field of abc.def.com',
            reportLink: '',

        },
        {
            id: '2',
            reportId: '#v3jd8-st62s ',
            reportTitle: 'CSRF in Password Change Function of staging.def.com',
            reportLink: '',

        },
    ],
}





export default BusinessProfile;
