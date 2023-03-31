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
import Cookies from "js-cookie";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Avat from "../image/avat1.png";


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
        <li className="dashboard-link" onClick={gotoBusinessProfile}>
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
        <li onClick={logout}>
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

function BusinessProfile() {
  const [profileStats, setProfileStats] = useState(undefined);
  const companyName = Cookies.get('companyName');
  useEffect(() => {
    async function fetchProfileStats() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ myCookie: `${Cookies.get("myCookie")}` }),
      };

      const response = await fetch(
        "http://127.0.0.1:5173/profileStats",
        requestOptions
      );
      const data = await response.json();
      setProfileStats(data);
    }

    fetchProfileStats();
  }, []);

  const monthly_report =
    profileStats && profileStats.stats && profileStats.stats.monthly_report;

  const monthly_paid =
    profileStats && profileStats.stats && profileStats.stats.monthly_paid;

  const avg_paid =
    profileStats && profileStats.stats && profileStats.stats.avg_paid;

  const mmm_paid =
    profileStats && profileStats.stats && profileStats.stats.mmm_paid;

  const mmm_reports =
    profileStats && profileStats.stats && profileStats.stats.mmm_reports;

  const mmm_avg =
    profileStats && profileStats.stats && profileStats.stats.mmm_avg;

  const open =
    profileStats && profileStats.stats && profileStats.report_counts.open;

  const resolved =
    profileStats && profileStats.stats && profileStats.report_counts.resolved;

  const NA =
    profileStats && profileStats.stats && profileStats.report_cvss.NA;

  const dups =
    profileStats && profileStats.stats && profileStats.report_cvss.dups;

  const info =
    profileStats && profileStats.stats && profileStats.report_cvss.info;

  const medium =
    profileStats && profileStats.stats && profileStats.report_cvss.medium;

  const high =
    profileStats && profileStats.stats && profileStats.report_cvss.high;

  const critical =
    profileStats && profileStats.stats && profileStats.report_cvss.critical;




  // dups = jwt.report_cvss.dups;
  // info = jwt.report_cvss.info;
  // medium = jwt.report_cvss.medium;
  // high = jwt.report_cvss.high;
  // critical = jwt.report_cvss.critical;
  // });
  return (
    <>
      <div className="bus-profile">
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <DashboardNavbar />
          </div>
          <div className="bus-profile-div2">
            <h1 className="bus-profile-div2-h">Business Profile</h1>
            <div className="dashboard">
              <center>
                <div className="bus-profile-header">
                  <img src={Avat} className="bus-profile-company-logo" />
                  <h3 className="bus-profile-company-name">{companyName}</h3>
                </div>
              </center>
              <div className="stats">
                <p className="bus-profie-stat-h">Statistics</p>
                <div className="bus-profile-stat-div">
                  <div class="column">
                    <div className="column-div1">
                      <label className="bus-profile-label">
                        Monthly Received Reports:
                      </label>
                      <span className="bus-profile-span">{monthly_report}</span>
                    </div>
                    <div className="column-div2">
                      <label className="bus-profile-label">
                        Received Reports (Last 90 Days):
                      </label>
                      <span className="bus-profile-span">{mmm_reports}</span>
                    </div>
                  </div>

                  <div class="column">
                    <div className="column-div1">
                      <label className="bus-profile-label">
                        Monthly Bounties Paid:
                      </label>
                      <span className="bus-profile-span">{monthly_paid}</span>
                    </div>
                    <div className="column-div2">
                      <label className="bus-profile-label">
                        Bounties Paid (Last 90 Days):
                      </label>
                      <span className="bus-profile-span">{mmm_paid}</span>
                    </div>
                  </div>

                  <div class="column">
                    <div className="column-div1">
                      <label className="bus-profile-label">
                        Average Bounty Paid (Monthly):
                      </label>
                      <span className="bus-profile-span">{avg_paid}</span>
                    </div>
                    <div className="column-div2">
                      <label className="bus-profile-label">
                        Average Bounties Paid (Last 90 Days):
                      </label>
                      <span className="bus-profile-span">{mmm_avg}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="report-count">
                <p className="bus-profie-stat-h">Report Counts</p>
                <div className="bus-profile-stat-div">
                  <div class="column">
                    <div className="column-div1">
                      <label className="bus-profile-label">Open Reports:</label>
                      <span className="bus-profile-span">{open}</span>
                    </div>
                    <div className="column-div2">
                      <label className="bus-profile-label">
                        Resoved Reports (Last 90 Days):
                      </label>
                      <span className="bus-profile-span">{resolved}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="report-count-based">
                <p className="bus-profie-stat-h">
                  Report Counts (Based on CVSS)
                </p>
                <div className="bus-profile-stat-div">
                  <div class="column">
                    <div className="column-div1">
                      <label className="bus-profile-label">N/A</label>
                      <span className="bus-profile-span">{NA}</span>
                    </div>
                    <div className="column-div2">
                      <label className="bus-profile-label">Medium:</label>
                      <span className="bus-profile-span">{medium}</span>
                    </div>
                  </div>

                  <div class="column">
                    <div className="column-div1">
                      <label className="bus-profile-label">Duplicate:</label>
                      <span className="bus-profile-span">{dups}</span>
                    </div>
                    <div className="column-div2">
                      <label className="bus-profile-label">High:</label>
                      <span className="bus-profile-span">{high}</span>
                    </div>
                  </div>

                  <div class="column">
                    <div className="column-div1">
                      <label className="bus-profile-label">Informative:</label>
                      <span className="bus-profile-span">{info}</span>
                    </div>
                    <div className="column-div2">
                      <label className="bus-profile-label">Critical:</label>
                      <span className="bus-profile-span">{critical}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessProfile;