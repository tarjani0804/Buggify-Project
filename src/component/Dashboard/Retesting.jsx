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
import { TbReportAnalytics, TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SiBigbluebutton } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { FaSearchMinus } from "react-icons/fa";
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
        <li onClick={gotoRetesting} className="dashboard-link">
          <span className="navbar-menu-icon">
            <BsPlusSquareDotted />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Retesting</span>}
        </li>
        <li onClick={gotoBountyPayment}>
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
  const [query, setQuery] = useState("");
  const [report, setReport] = useState("");
  const [showReport, setShowReport] = useState(false);


  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  const handleSearchClick = async (e) => {
    e.preventDefault();
    const resp = await fetch(`http://127.0.0.1:5173/reportfetch/${query}`);
    const out = await resp.json();
    setReport(out[0]);

    setShowReport(true);
  };
  const handleSubmit = async (e) => {
    const myCookie = Cookies.get("myCookie");
    const report_id = report.report_id
    const data = {
      myCookie: `${myCookie}`,
      report_id: `${report_id}`,
    };
    const response = await fetch(`http://127.0.0.1:5173/reopenReport`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jwt = await response.json();
    alert(jwt.status);
    // data outgoing for retesting




  };
  console.log(report.report_title);
  console.log(report.report_id);
  console.log(report.reproduce_steps);
  console.log(report.poc1);
  console.log(report.poc2);
  console.log(report.poc3);
  console.log(report.poc4);
  console.log(report.poc5);
  console.log(report.cvss);
  console.log(report.attack_scenario);
  console.log(report.remediation);
  console.log(report.note);
  return (
    <>
      <div className="bus-profile">
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <DashboardNavbar />
          </div>
          <div className="bus-profile-div2">
            <center>
              <h1 className="bus-profile-div2-h">Retesting</h1>
              <div className="bus-profile-header">
                <img src={Avat} className="bus-profile-company-logo" />
                <h3 className="bus-profile-company-name">
                  {props.companyName}
                </h3>
              </div>
            </center>
            <div className="stats">
              <p className="bus-profie-stat-h">
                Search Report by Report Unique Identification Number fot
                Retesting
              </p>
              <form className="dashboard-form">
                <div className="column-div1">
                  <input
                    className="dashboard-reward-update-input"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter Report Id :"
                  // onChange={(event) => setReportSearch(event.target.value)}
                  />
                  <div>
                    <button
                      className="search-button"
                      onClick={handleSearchClick}
                    >
                      <FaSearchMinus />
                    </button>
                  </div>
                </div>
              </form>
              /* report div */
              <div className="report-div" style={{ display: showReport ? 'block' : 'none' }} >
                <div className="bus-profile-bug-report-divtitle">
                  <p className="bus-profile-bug-report-div-title-p">
                    Report Title: {report.report_title}
                  </p>
                  <p className="bus-profile-bug-report-div-id-p">
                    Report Id: {report.report_id}
                  </p>
                </div>
                <div className="report-steps">
                  <p className="bus-profile-bug-report-div-title-p">
                    Steps to Reproduce :
                    <p className="report-note-p"> {report.reproduce_steps}</p>

                  </p>
                </div>

                <div className="report-proof">
                  <p className="bus-profile-bug-report-div-title-p">
                    Proof-of-Concept :
                  </p>
                  <ul>
                    <li>
                      <a href={report.poc1} className="report-proof-link-of-poc">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href={report.poc2} className="report-proof-link-of-poc">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href={report.poc3} className="report-proof-link-of-poc">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href={report.poc4} className="report-proof-link-of-poc">
                        Link 4
                      </a>
                    </li>
                    <li>
                      <a href={report.poc5} className="report-proof-link-of-poc">
                        Link 5
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="report-proof">
                  <p className="bus-profile-bug-report-div-title-p">
                    CVSS Score:
                    <p className="report-note-p"> {report.cvss}</p>

                  </p>
                </div>
                <div className="report-proof">
                  <p className="bus-profile-bug-report-div-title-p">
                    Attack Scenario:
                  </p>
                  <p className="report-proof-link-of-poc">{report.attack_scenario}</p>
                </div>
                <div className="report-proof">
                  <p className="bus-profile-bug-report-div-title-p">
                    Remediation:
                  </p>
                  <p className="report-proof-link-of-poc">{report.remediation}</p>
                </div>
                <div className="report-proof">
                  <p className="bus-profile-bug-report-div-title-p">
                    Note by Company:{" "}
                  </p>
                  <p className="report-note-p"> {report.note}</p>
                </div>
              </div>
              <div className="button_ani retesting-button" style={{ display: showReport ? 'block' : 'none' }}>
                <button className="btn" onClick={handleSubmit}>
                  Request for Retesting
                </button>
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
}

export default BusinessProfile;
