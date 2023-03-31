import React, { useState, useEffect } from "react";
// import '../ResearcherProfile.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { BsJournalBookmark } from 'react-icons/bs';
import { RiFolderHistoryLine, RiLogoutBoxRLine, RiQuestionLine } from 'react-icons/ri';
import { IoSettingsOutline, IoNotificationsSharp } from 'react-icons/io5';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SiBigbluebutton } from 'react-icons/si';
import { ImProfile } from 'react-icons/im';
import { TbReportSearch } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

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
    };

    const logout = () => {
        Cookies.remove('userName');
        Cookies.remove('companyName');
        Cookies.remove('buss_id');
        Cookies.remove('rsrc_id');
        Cookies.remove('myCookie');
        Cookies.remove('prog_id');
        Navigate("/");
    };

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
                <li onClick={gotoTrackReports}>
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
                <li onClick={logout}>
                    <span className="navbar-menu-icon"><RiLogoutBoxRLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
                </li>
                <hr className={`navbar-hr ${isMenuOpen ? 'open' : ''}`} />


                <li onClick={gotoSetting}>
                    <span className="navbar-menu-icon"><IoSettingsOutline /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Settings</span>}
                </li>
                <li className="dashboard-link" onClick={gotoFAQs}>
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

class ResearcherFAQs extends React.Component {
    render() {

        const hiddenTexts = [{
            label: 'How do I write a good report?',
            value: 'A good report is made up of a few things — a descriptive title, a thorough explanation and proof of concept, and metadata. @nahamsec wrote a great guide on how to write a good report. You can read it here: https://docs.hackerone.com/programs/quality-reports.html.'
        },
        {
            label: 'How are researchers compensated for their services?',
            value: 'Buggify manages payments to researchers who are the first to successfully identify unique vulnerabilities that are in scope of the Bug Bounty Program, following review and approval by the customer. At the outset of a Bug Bounty Program, the customer will establish and fund a “Rewards Pool” from which Bugcrowd will pay out rewards to successful researchers. Other non-monetary forms of payment may apply, including recognition by the researcher community on Crowdcontrol’s Hall of Fame & Monthly Leader Boards. Bugcrowd pays researchers 100% of the bounties earned to ensure proper incentives within the ecosystem.'
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
                            <ResearcherNavbar />
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










export default ResearcherFAQs;


