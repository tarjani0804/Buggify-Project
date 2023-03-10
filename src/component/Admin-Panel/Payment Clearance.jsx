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
                <li className="dashboard-link" onClick={gotoPaymentClearance}>
                    <span className="navbar-menu-icon"><RiSecurePaymentFill /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Payment Clearance</span>}
                </li>
                <li onClick={gotoContactNotification}>
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

const PaymentClearance = () => {
    const [reportId, setReportId] = useState();
    const [bounty, setBounty] = useState();
    const [paymentId, setPaymentId] = useState();



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
                            <h1 className="admin-dashboard-h">Payment Clearance</h1>
                        </center>

                        <div className="admin-dashboard-form">
                            <form>
                                <div className="admin-dashboard-form-div">
                                    <label className="admin-dashboad-form-label">Report Id: </label>
                                    <input className="admin-dashboard-form-input"
                                        value={reportId}
                                        type="text"
                                        onChange={(event) => setReportId(event.target.value)}
                                    />
                                </div>
                                <div className="admin-dashboard-form-div">
                                    <label className="admin-dashboad-form-label">Bounty: </label>
                                    <input className="admin-dashboard-form-input"
                                        type="text"
                                        value={bounty}
                                        onChange={(event) => setBounty(event.target.value)}
                                    />
                                </div>
                                <div className="admin-dashboard-form-div">
                                    <label className="admin-dashboad-form-label">Payment Id: </label>
                                    <input className="admin-dashboard-form-input"
                                        type="text"
                                        value={paymentId}
                                        onChange={(event) => setPaymentId(event.target.value)}
                                    />
                                </div>
                                <div className="button_ani admin-dashboard-form-button" onClick={handleSubmit}>
                                    <button className="btn">Clear Payment</button>
                                </div>
                            </form>
                        </div>



                    </div>



                </div>

            </div>
        </>
    )
}

export default PaymentClearance;