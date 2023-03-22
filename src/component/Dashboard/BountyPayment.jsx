import React, { useState, useEffect } from "react";
import "./BusinessProfile.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdAddBusiness, MdSecurityUpdateGood } from "react-icons/md";
import { VscReport } from "react-icons/vsc";
import { BsPlusSquareDotted } from "react-icons/bs";
import {
  RiUserSettingsLine,
  RiFileHistoryLine,
  RiLogoutBoxRLine,
  RiQuestionLine,
} from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SiBigbluebutton } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Avat from "../image/avat1.png";
import Cookies from "js-cookie";

function DashboardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navigate = useNavigate();
  const gotoBusinessProfile = () => {
    Navigate("/businessProfile");
  };
  const gotoScopeSetting = () => {
    Navigate("/ScopeSetting");
  };
  const gotoBugReport = () => {
    Navigate("/bugReport");
  };
  const gotoRewardUpdate = () => {
    Navigate("/rewardUpdate");
  };
  const gotoRetesting = () => {
    Navigate("/Retesting");
  };
  const gotoBountyPayment = () => {
    Navigate("/BountyPayment");
  };
  const gotoPreviousFinding = () => {
    Navigate("/PreviousFinding");
  };
  const gotoDashboardSetting = () => {
    Navigate("/DashboardSetting");
  };
  const gotoFAQs = () => {
    Navigate("/FAQs");
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
        <li onClick={gotoBusinessProfile}>
          <span className="navbar-menu-icon">
            <MdAddBusiness />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Business Profile</span>
          )}
        </li>
        <li onClick={gotoScopeSetting}>
          <span className="navbar-menu-icon" style={{ color: "#ffffff" }}>
            <RiUserSettingsLine />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Scope Setting</span>
          )}
        </li>
        <li onClick={gotoBugReport}>
          <span className="navbar-menu-icon">
            <VscReport />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Bug Reports</span>}
        </li>
        <li onClick={gotoRewardUpdate}>
          <span className="navbar-menu-icon">
            <MdSecurityUpdateGood />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Reward Update</span>
          )}
        </li>
        <li onClick={gotoRetesting}>
          <span className="navbar-menu-icon">
            <BsPlusSquareDotted />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Retesting</span>}
        </li>
        <li onClick={gotoBountyPayment} className="dashboard-link">
          <span className="navbar-menu-icon">
            <RiFileHistoryLine />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Bounty Payment Details</span>
          )}
        </li>
        <li onClick={gotoPreviousFinding}>
          <span className="navbar-menu-icon">
            <TbReportAnalytics />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Previous finding</span>
          )}
        </li>
        <li>
          <span className="navbar-menu-icon">
            <RiLogoutBoxRLine />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
        </li>
        <hr className={`navbar-hr ${isMenuOpen ? "open" : ""}`} />
        <li onClick={gotoDashboardSetting}>
          <span className="navbar-menu-icon">
            <IoSettingsOutline />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Settings</span>}
        </li>
        <li onClick={gotoFAQs}>
          <span className="navbar-menu-icon">
            <RiQuestionLine />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">FAQs</span>}
        </li>
      </ul>
    </nav>
  );
}

const BusinessProfile = (props) => {
  const [paymentId, setPaymentId] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [rsrcId, setRsrcID] = useState("");
  const [reportId, setReportID] = useState("");
  const myCookie = Cookies.get("myCookie");
  const handleSubmit = async (e) => {
    // data outgoing for bounty payment
    const data = {
      myCookie: `${myCookie}`,
      rsrc_id: `${rsrcId}`,
      report_id: `${reportId}`,
      bounty: `${paymentAmount}`,
      payment_id: `${paymentId}`,
    };
    const response = await fetch(`http://127.0.0.1:5173/bountyinfo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await response.json();
  };

  return (
    <>
      <div className="bus-profile">
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <DashboardNavbar />
          </div>
          <div className="bus-profile-div2">
            <center>
              <h1 className="bus-profile-div2-h">Bounty Payment</h1>
            </center>

            <div className="dashboard">
              <center>
                <div className="bus-profile-header">
                  <img src={Avat} className="bus-profile-company-logo" />
                  <h3 className="bus-profile-company-name">
                    {props.companyName}
                  </h3>
                </div>
              </center>
              <div className="stats">
                <p className="bus-profie-stat-h">Enter Payment Detail</p>
                <div className="bus-profile-stat-div">
                  <form className="dashboard-form">
                    <div className="column-div1">
                      <label className="dashboard-form-label label">
                        Payment ID:{" "}
                      </label>
                      <input
                        className="dashboard-input input"
                        type="text"
                        value={paymentId}
                        onChange={(event) => setPaymentId(event.target.value)}
                      />
                    </div>
                    <div className="column-div1">
                      <label className="dashboard-form-label">
                        Bounty Amount:{" "}
                      </label>
                      <input
                        className="dashboard-input input"
                        type="text"
                        value={paymentAmount}
                        onChange={(event) =>
                          setPaymentAmount(event.target.value)
                        }
                      />
                    </div>
                    <div className="column-div1">
                      <label className="dashboard-form-label ">
                        Researcher ID:{" "}
                      </label>
                      <input
                        className="dashboard-input input"
                        type="text"
                        value={rsrcId}
                        onChange={(event) => setRsrcID(event.target.value)}
                      />
                    </div>
                    <div className="column-div1">
                      <label className="dashboard-form-label">
                        Report ID:{" "}
                      </label>
                      <input
                        className="dashboard-input input"
                        type="text"
                        value={reportId}
                        onChange={(event) => setReportID(event.target.value)}
                      />
                    </div>

                    <div
                      className="button_ani dashboard-button"
                      onClick={handleSubmit}
                    >
                      <button type="submit" className="button2">
                        Bounty Payment Info Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BusinessProfile.defaultProps = {
  companyLogo: "",
  companyName: "Buggify LLC",
  bounty: [
    {
      id: 1,
      pId: "738836-837536-8726534",
      paidTo: "CryOniXHashacks",
      paymentAmount: "1000",
    },
    {
      id: 2,
      pId: "937483-938536-3794534",
      paidTo: "CryOniXHashacks",
      paymentAmount: "1000",
    },
    {
      id: 3,
      pId: "937536-929464-8635634",
      paidTo: "CryOniXHashacks",
      paymentAmount: "1000",
    },
  ],
};
export default BusinessProfile;
