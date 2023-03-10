import React, { useState } from "react";
import './Admin.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { TbCertificate } from 'react-icons/tb';
import { AiOutlineSchedule, AiOutlineArrowLeft } from 'react-icons/ai';
import { RiSecurePaymentFill, RiLogoutBoxRLine } from 'react-icons/ri';
import { MdContacts } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const Navigate = useNavigate();
    const gotoPaymentClearance = () => {
        Navigate('/PaymentClearance')
    };
    const gotoContactNotification = () => {
        Navigate('/ContactNotification')
    };
    const gotoExamSchedule = () => {
        Navigate('/ExamSchedule')
    };
    const gotoCertificateInfo = () => {
        Navigate('/CertificateInfo')
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
                <li onClick={gotoPaymentClearance}>
                    <span className="navbar-menu-icon"><RiSecurePaymentFill /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Payment Clearance</span>}
                </li>
                <li className="dashboard-link" onClick={gotoContactNotification}>
                    <span className="navbar-menu-icon" ><MdContacts /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Contact Notification</span>}
                </li>
                <li onClick={gotoExamSchedule}>
                    <span className="navbar-menu-icon"><AiOutlineSchedule /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Exam Schedule</span>}
                </li>
                <li onClick={gotoCertificateInfo}>
                    <span className="navbar-menu-icon"><TbCertificate /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Certificate Info</span>}
                </li>
                <li >
                    <span className="navbar-menu-icon"><RiLogoutBoxRLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
                </li>

            </ul>

        </nav>);

}

const ContactNotification = () => {

    const [mailTo, setMailTo] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = () => {

    }


    return (
        <>
            <div className="bus-profile">

                <div className="bus-profile-divs">
                    <div className="bus-profile-div1">
                        <DashboardNavbar />
                    </div>

                    <div className="admin-dashboard-div">
                        <center>
                            <h1 className="admin-dashboard-h">Contact Notification</h1>
                        </center>

                        <div className="admin-dashboard-form">
                            <form>
                                <div className="admin-dashboard-form-div">
                                    <label className="admin-dashboad-form-label">Mail To: </label>
                                    <input className="admin-dashboard-form-input"
                                        type="text"
                                        value={mailTo}
                                        onChange={(event) => setMailTo(event.target.value)}
                                    />
                                </div>
                                <div className="admin-dashboard-form-div d1">
                                    <label className="admin-dashboad-form-label">Message:</label>
                                    <textarea className="admin-dashboard-form-input"
                                        style={{ height: "100px" }}
                                        type="text"
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                    />
                                </div>
                                <div className="button_ani admin-dashboard-form-button" onClick={handleSubmit}>
                                    <button className="btn">Contact</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactNotification;