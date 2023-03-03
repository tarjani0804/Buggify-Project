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
                <li >
                    <span className="company-icon navbar-menu-icon"><SiBigbluebutton /></span>
                    {isMenuOpen && <p className="company-name navbar-menu-item ">Buggify</p>}
                </li>
                <hr className={`navbar-hr ${isMenuOpen ? 'open' : ''}`} />
                <li onClick={gotoBusinessProfile}>
                    <span className="navbar-menu-icon"><MdAddBusiness /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Business Profile</span>}
                </li>
                <li onClick={gotoScopeSetting} className="dashboard-link">
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

    const [assetName, setAssetName] = useState("");
    const [assetType, setAssetType] = useState("");
    const [selectedAssetType, setSelectedCountry] = useState('');
    const [selectedImpactLevel, setImpactLevel] = useState('');
    const [selectedEligible, setEligible] = useState('');

    const assetTypes = [

        { id: '1', type: 'Mobile' },
        { id: '2', type: 'API' },
        { id: '3', type: 'Source Code Review' },
        { id: '4', type: 'CIDR' },
        { id: '5', type: 'IoT' },
    ];

    const handleAssetTypeChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const impactLevel = [

        { id: '1', type: 'High' },
        { id: '2', type: 'Medium' },
        { id: '3', type: 'Low' },
    ];
    const handleImpactLevelChange = (event) => {
        setImpactLevel(event.target.value);
    };


    const eligibles = [

        { id: '1', type: 'No' },
    ];

    const handleEligibleChange = (event) => {
        setEligible(event.target.value);
    };

    const handleUpdateInScope = () => {
    }
    const handleUpdateOutScope = () => {
    }


    return (
        <>

            <div className="bus-profile">

                <div className="bus-profile-divs">
                    <div className="bus-profile-div1">
                        <DashboardNavbar />
                    </div>
                    <div className="bus-profile-div2">
                        <h1 className="bus-profile-div2-h">Scope Setting</h1>
                        <div className="dashboard">
                            <center><div className="bus-profile-header">
                                <img src={props.companyLogo} className="bus-profile-company-logo" />
                                <h3 className="bus-profile-company-name">{props.companyName}</h3>
                            </div></center>
                            <div className="stats">
                                <p className="bus-profie-stat-h">In-Scope</p>
                                <div className="bus-profile-stat-div">

                                    <form className="dashboard-form">
                                        <div className="column-div1">
                                            <label className="dashboard-form-label">Asset: </label>
                                            <input className="dashboard-input"
                                                type="text"
                                                value={assetName}
                                                onChange={(event) => setAssetName(event.target.value)} />
                                        </div>
                                        <div className="column-div1">
                                            <label className="dashboard-form-label">Asset Type: </label>
                                            <select className="dashboard-input" id="assetType" value={selectedAssetType} onChange={handleAssetTypeChange}>
                                                <option value="">Web</option>
                                                {assetTypes.map((assettype) => (
                                                    <option className="dashboard-form-option" key={assettype.id} value={assettype.type} >{assettype.type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="column-div1">
                                            <label className="dashboard-form-label">Impact Level: </label>
                                            <select className="dashboard-input" id="assetType" value={selectedImpactLevel} onChange={handleImpactLevelChange}>
                                                <option value="">Critical</option>
                                                {impactLevel.map((impactlevel) => (
                                                    <option className="dashboard-form-option" key={impactlevel.id} value={impactlevel.type} >{impactlevel.type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="column-div1">
                                            <label className="dashboard-form-label">Eligible for Bounty? </label>
                                            <select className="dashboard-input input3" id="assetType" value={selectedEligible} onChange={handleEligibleChange}>
                                                <option value="">Yes</option>
                                                {eligibles.map((eligible) => (
                                                    <option className="dashboard-form-option" key={eligible.id} value={eligible.type} >{eligible.type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="button_ani dashboard-button" onClick={handleUpdateInScope}>
                                            <button type="submit" className="button2">Update Scope</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className="report-count">
                                <p className="bus-profie-stat-h">Out-Scope</p>
                                <div className="bus-profile-stat-div">
                                    <form className="dashboard-form">
                                        <div className="column-div1">
                                            <label className="dashboard-form-label">Asset: </label>
                                            <input className="dashboard-input"
                                                type="text"
                                                value={assetName}
                                                onChange={(event) => setAssetName(event.target.value)} />
                                        </div>
                                        <div className="column-div1">
                                            <label className="dashboard-form-label">Asset Type: </label>
                                            <select className="dashboard-input" id="assetType" value={selectedAssetType} onChange={handleAssetTypeChange}>
                                                <option value="">Web</option>
                                                {assetTypes.map((assettype) => (
                                                    <option className="dashboard-form-option" key={assettype.id} value={assettype.type} >{assettype.type}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="button_ani dashboard-button" onClick={handleUpdateOutScope}>
                                            <button type="submit" className="button2">Update Scope</button>
                                        </div>
                                    </form>

                                </div>
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


};

export default BusinessProfile;