import React, { useState } from "react";
import "./Admin.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { AiOutlineSchedule, AiOutlineArrowLeft } from "react-icons/ai";
import { RiSecurePaymentFill, RiLogoutBoxRLine } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navigate = useNavigate();
  const gotoPaymentClearance = () => {
    Navigate("/PaymentClearance");
  };
  const gotoContactNotification = () => {
    Navigate("/ContactNotification");
  };
  const gotoExamSchedule = () => {
    Navigate("/ExamSchedule");
  };
  const gotoCertificateInfo = () => {
    Navigate("/CertificateInfo");
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : "close"}`}>
      <div
        className={`navbar-toggle ${isMenuOpen ? "navopen" : "navclose"}`}
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <FiChevronLeft /> : <FiChevronRight />}
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <span className="back-link-icon navbar-menu-icon">
            <AiOutlineArrowLeft />
          </span>
          {isMenuOpen && (
            <span className="back-link navbar-menu-item">Back to Home</span>
          )}
        </li>
        <hr className={`navbar-hr ${isMenuOpen ? "open" : ""}`} />
        <li onClick={gotoPaymentClearance}>
          <span className="navbar-menu-icon">
            <RiSecurePaymentFill />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Payment Clearance</span>
          )}
        </li>
        <li onClick={gotoContactNotification}>
          <span className="navbar-menu-icon">
            <MdContacts />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Contact Notification</span>
          )}
        </li>
        <li onClick={gotoExamSchedule}>
          <span className="navbar-menu-icon">
            <AiOutlineSchedule />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Exam Schedule</span>
          )}
        </li>
        <li className="dashboard-link" onClick={gotoCertificateInfo}>
          <span className="navbar-menu-icon">
            <TbCertificate />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Certificate Info</span>
          )}
        </li>
        <li>
          <span className="navbar-menu-icon">
            <RiLogoutBoxRLine />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
        </li>
      </ul>
    </nav>
  );
}

const CertificationInfo = () => {
  const [rsrcId, setRsrcId] = useState();
  const [CertificateId, setCertificateId] = useState();
  const [examDate, setExamDate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      rsrc_id: `${rsrcId}`,
      certificate_id: `${CertificateId}`,
      exam_date: `${examDate}`,
    };
    const response = await fetch(`http://127.0.0.1:5173/certInfo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jwt = await response.json();
    alert(jwt.status);
    window.location.href = "/CertificateInfo";
  };

  return (
    <>
      <div className="bus-profile">
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <DashboardNavbar />
          </div>

          <div className="admin-dashboard-div">
            <center>
              <h1 className="admin-dashboard-h">Certificate Info</h1>
            </center>

            <div className="admin-dashboard-form">
              <form>
                <div className="admin-dashboard-form-div">
                  <label className="admin-dashboad-form-label">RSRC Id:</label>
                  <input
                    className="admin-dashboard-form-input"
                    type="text"
                    value={rsrcId}
                    onChange={(event) => setRsrcId(event.target.value)}
                  />
                </div>
                <div className="admin-dashboard-form-div">
                  <label className="admin-dashboad-form-label">
                    Certificate Id:
                  </label>
                  <input
                    className="admin-dashboard-form-input"
                    type="text"
                    value={CertificateId}
                    onChange={(event) => setCertificateId(event.target.value)}
                  />
                </div>
                <div className="admin-dashboard-form-div">
                  <label className="admin-dashboad-form-label">
                    Exam Date:{" "}
                  </label>
                  <input
                    className="admin-dashboard-form-input"
                    type="date"
                    // dateFormat="YYYY-MM-DD"
                    value={examDate}
                    onChange={(event) => setExamDate(event.target.value)}
                  />
                </div>
                <div
                  className="button_ani admin-dashboard-form-button"
                  onClick={handleSubmit}
                >
                  <button className="btn">Certificate Clearance</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificationInfo;
