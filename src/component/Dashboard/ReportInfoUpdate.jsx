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


    //  data incoming for report info



    const [cvss, setcvss] = useState();
    const [remark, setremark] = useState();


    const handleSubmit = () => {


        // data outgoing for report info update

    }


    return (
        <>

            <div className="bus-profile">

                <div className="bus-profile-divs">
                    <div className="bus-profile-div1">
                        <DashboardNavbar />
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

                            <form className="report-update-form" >
                                <div className="column-div3">
                                    <label className="report-update-label">CVSS Score: </label>
                                    <input className="report-update-input"
                                        type="text"
                                        value={cvss}
                                        onChange={(event) => setcvss(event.target.value)} />
                                </div>
                                <div className="column-div3">
                                    <label className="report-update-label">Remark: </label>
                                    <textarea className="report-update-input"
                                        style={{
                                            height: "15rem"
                                        }}
                                        type="text"
                                        value={remark}
                                        onChange={(event) => setremark(event.target.value)} />
                                </div>
                                <div className="button_ani report-info-button" onClick={handleSubmit} >
                                    <button type="submit" className="button2">
                                        Update Report
                                    </button>
                                </div>

                            </form>


                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

BusinessProfile.defaultProps = {
    companyLogo: '',
    companyName: 'Buggfy LLC',
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
