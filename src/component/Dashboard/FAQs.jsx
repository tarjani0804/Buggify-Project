import React, { useState, useEffect } from "react";
import './BusinessProfile.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdAddBusiness, MdSecurityUpdateGood } from 'react-icons/md';
import { VscReport } from 'react-icons/vsc';
import { BsPlusSquareDotted } from 'react-icons/bs';
import { RiUserSettingsLine, RiFileHistoryLine, RiLogoutBoxRLine, RiQuestionLine } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai';
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
                <li onClick={gotoRetesting}>
                    <span className="navbar-menu-icon"><BsPlusSquareDotted /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Retesting</span>}
                </li>
                <li onClick={gotoBountyPayment} >
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
                <li onClick={gotoFAQs} className="dashboard-link">
                    <span className="navbar-menu-icon"><RiQuestionLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">FAQs</span>}
                </li>
            </ul>

        </nav>);

}

class AccordionItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.handleToggleIcon = this.handleToggleIcon.bind(this);
        this.state = {
            visibility: false,
            isPlusIcon: true
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        })
    }
    handleToggleIcon() {
        this.setState((prevState) => {
            return {
                isPlusIcon: !prevState.isPlusIcon
            };
        });
    }
    render() {
        const activeStatus = this.state.visibility ? 'active' : ''

        return (

            <div>
                <button className="accordion__button" onClick={this.handleToggleVisibility}>{this.props.hiddenText.label} <span onClick={this.handleToggleIcon}>  {this.state.isPlusIcon ? <AiOutlinePlus /> : <AiOutlineMinus />}</span></button>
                <p className={`accordion__content ${activeStatus}`}>
                    {
                        this.props.hiddenText.value
                    }
                </p>

            </div >
        );
    }
}

class Accordion extends React.Component {
    render() {
        return (
            <div className="accordion">
                {this.props.hiddenTexts.map((hiddenText) => <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />)}
            </div>
        );
    }
}

class BusinessFaqs extends React.Component {
    render() {

        const hiddenTexts = [{
            label: 'How do I write a good report?',
            value: 'A good report is made up of a few things — a descriptive title, a thorough explanation and proof of concept, and metadata. @nahamsec wrote a great guide on how to write a good report. You can read it here: https://docs.hackerone.com/programs/quality-reports.html.'
        },
        {
            label: 'How are researchers compensated for their services?',
            value: 'Bugcrowd manages payments to researchers who are the first to successfully identify unique vulnerabilities that are in scope of the Bug Bounty Program, following review and approval by the customer. At the outset of a Bug Bounty Program, the customer will establish and fund a “Rewards Pool” from which Bugcrowd will pay out rewards to successful researchers. Other non-monetary forms of payment may apply, including recognition by the researcher community on Crowdcontrol’s Hall of Fame & Monthly Leader Boards. Bugcrowd pays researchers 100% of the bounties earned to ensure proper incentives within the ecosystem.'
        },
        {
            label: 'What happens when I submit a report?',
            value: 'A company will review the contents and triage the vulnerability. You can review the Response Efficiency metrics on a company’s policy page. This will help you determine how quickly a company responds, bounties and resolves the bug.'
        },
        {
            label: 'When do I submit a security vulnerability?',
            value: 'Before you submit a security vulnerability, make sure to read through the program’s scope. The scope determines whether or not a company is interested in a particular vulnerability. Once you have confirmed the program will accept the vulnerability, be sure to submit the issue to the program.'
        }];

        return (
            <>

                <div className="res-profile">

                    <div className="bus-profile-divs">
                        <div className="bus-profile-div1">
                            <DashboardNavbar />
                        </div>
                        <div className="bus-profile-div2">
                            <h1 className="bus-profile-div2-h">FAQs</h1>

                            <div>

                                <Accordion hiddenTexts={hiddenTexts} />
                            </div>

                        </div>
                    </div>
                </div>

            </>
        );
    }
}


export default BusinessFaqs;