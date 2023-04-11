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
import { useNavigate } from "react-router-dom";
import Avat from "../image/avat1.png";
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
    Navigate("/businessProfile");
  };
  const gotohome = () => {
    Navigate("/");
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
        <li onClick={gotohome}>
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
        <li onClick={gotoBountyPayment}>
          <span className="navbar-menu-icon">
            <RiFileHistoryLine />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Bounty Payment Details</span>
          )}
        </li>
        <li onClick={gotoPreviousFinding} className="dashboard-link">
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

const BusinessProfile = (props) => {
  const navigate = useNavigate();

  // Data incoming for previous finding
  const [reportList, setReportList] = useState();
  const myCookie = Cookies.get("myCookie");
  const companyName = Cookies.get("companyName");
  const data = {
    myCookie: `${myCookie}`,
  };
  useEffect(() => {
    async function fetchProfileStats() {
      const response = await fetch(`http://127.0.0.1:5173/previousFindings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jwt = await response.json();
      setReportList(jwt);
    }
    fetchProfileStats();
  }, []);


  console.log(reportList);

  const reportlist = [];
  if (reportList) {
    for (let i = 0; i < reportList.length; i++) {
      const reports = reportList[i];
      reportlist.push(
        <div key={reports.id} className="bus-profile-bug-report-div">
          <div className="bus-profile-bug-report-divtitle">
            <p className="bus-profile-bug-report-div-title-p">
              Report Title: {reports.report_title}
            </p>
            <p className="bus-profile-bug-report-div-id-p">
              Report Id: {reports.report_id}
            </p>
          </div>
          <p
            className="bus-profile-bug-report-div-link1"
            onClick={(event) => handleSubmit1(event, i)}
          >
            Check Report
          </p>
        </div>
      );
    }
  }



  const gotoReportInfoUpdate = (val) => {
    Cookies.set("report_id", `${reportList[val].report_id}`, {
      expires: 14,
      path: "/",
    });
    navigate("/ReportInfo");
  };
  const handleSubmit1 = (event, id) => {
    gotoReportInfoUpdate(id);
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
              <h1 className="bus-profile-div2-h">Previous Finding</h1>
              <div className="dashboard">
                <center>
                  <div className="bus-profile-header">
                    <img src={Avat} className="bus-profile-company-logo" />
                    <h3 className="bus-profile-company-name">
                      {companyName}
                    </h3>
                  </div>
                </center>
                <div className="stats">
                  <p className="bus-profie-stat-h">
                    Previous Findings (Closed)
                  </p>
                  <div className="bus-profile-bug-report">
                    {reportlist}
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

BusinessProfile.defaultProps = {
  companyLogo: "",
  companyName: "Buggify LLC",
  reports: [
    {
      id: "1",
      reportId: "#a7ag3-jh38g",
      reportTitle: "XSS in Search Field of abc.def.com",
      reportLink: "",
    },
    {
      id: "2",
      reportId: "#v3jd8-st62s ",
      reportTitle: "CSRF in Password Change Function of staging.def.com",
      reportLink: "",
    },
  ],
};

export default BusinessProfile;
