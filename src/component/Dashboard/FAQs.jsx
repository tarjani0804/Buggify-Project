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
import Cookies from "js-cookie";


function DashboardNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const abc = Cookies.get('buss_id');
  if(abc == undefined){
    window.location.href = "/";
  }
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
                <li onClick={logout}>
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
            label: 'How Payment System works?',
            value: "Buggify has a bounty distribution system where once Company updates of bounty, data will be passed on to admin and will be double check and then it's finally added to Bounty History. It may take time up to 2-3 working day."
        },
        {
            label: 'How to Approch Researcher of Previously Submitted Bug and ask them for Retesting?',
            value: "To Follow Up Older Report and approach Researcher for Retesting, Business Dashboard has Option called Retesting where Client can search for specific report ID and by pressing Request for Retesting Button, System will Notify Researcher for Re-Investigate that issue again."
        },
        {
            label: 'What if user who manage Business Dashboard left Company, How Company can escalate account and continue it?',
            value: " In this particular case, Update Business Profile from Settings and let us know at nullify.bug@gmail.com"
        },
        {
            label: 'Suppose if bounty amount change in future, How to Update it?',
            value: 'By Changing Bounty Amount, Company can request for updating bounty amount from "Reward Update" and mail us to clear payment at nullify.bug@gmail.com'
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