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
import { SiBigbluebutton, SiReactrouter } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Avat from "../image/avat1.png";
var jwt,
  monthly_report,
  monthly_paid,
  avg_paid,
  mmm_reports,
  mmm_paid,
  mmm_avg,
  open,
  resolved,
  NA,
  dups,
  info,
  medium,
  high,
  critical;

function DashboardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const myCookie = Cookies.get("myCookie");
    const url = "http://127.0.0.1:5173/profileStats";
    const data = { myCookie: `${myCookie}` };
    async function fetchData() {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      jwt = await response.json();
      monthly_report = jwt.stats.monthly_report;
      monthly_paid = jwt.stats.monthly_paid;
      avg_paid = jwt.stats.avg_paid;
      mmm_reports = jwt.stats.mmm_reports;
      mmm_paid = jwt.stats.mmm_paid;
      mmm_avg = jwt.stats.mmm_avg;
      open = jwt.report_counts.open;
      resolved = jwt.report_counts.resolved;
      NA = jwt.report_cvss.NA;
      dups = jwt.report_cvss.dups;
      info = jwt.report_cvss.info;
      medium = jwt.report_cvss.medium;
      high = jwt.report_cvss.high;
      critical = jwt.report_cvss.critical;
    }
    fetchData();
  }, []);

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

class BusinessProfile extends React.Component {
  render() {
    // const companyName = "Buggify LLC";
    const {
      companyName,
      monthlyReceivedReports,
      receivedReportsLast90Days,
      monthlyBountiesPaid,
      bountiesPaidLast90Days,
      averageBountyPaidMonthly,
      averageBountiesPaidLast90Days,
      openReport,
      resolvedReport,
      na,
      medium,
      duplicate,
      high,
      informative,
      critical,
    } = this.prop;

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
                        <span className="bus-profile-span">
                          {monthly_report}
                        </span>
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
                        <label className="bus-profile-label">
                          Open Reports:
                        </label>
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
                        <label className="bus-profile-label">
                          Informative:
                        </label>
                        <span className="bus-profile-span">{info}</span>
                      </div>
                      <div className="column-div2">
                        <label className="bus-profile-label">critical:</label>
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
}

BusinessProfile.defaultProps = {
  companyLogo: { Avat },
  companyName: "Buggify LLC",
  monthlyReceivedReports: 1,
  receivedReportsLast90Days: 0,
  monthlyBountiesPaid: 0,
  bountiesPaidLast90Days: 0,
  averageBountyPaidMonthly: 0,
  averageBountiesPaidLast90Days: 0.0,
  openReport: 0,
  resolvedReport: 0,
  na: 0,
  medium: 0,
  duplicate: 0,
  high: 0,
  informative: 0,
  critical: 0,
};

export default BusinessProfile;
