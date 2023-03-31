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
import Cookies from "js-cookie";
import Avat from "../image/avat1.png";

function DashboardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const abc = Cookies.get("buss_id");
  if (abc == undefined) {
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
        <li onClick={gotoScopeSetting} className="dashboard-link">
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

const BusinessProfile = (props) => {
  const [inAssetName, setInAssetName] = useState("");
  const [outAssetName, setOutAssetName] = useState("");
  const [selectedInAssetType, setSelectedInAssetType] = useState("");
  const [selectedOutAssetType, setSelectedOutAssetType] = useState("");
  const [selectedImpactLevel, setImpactLevel] = useState("");
  const [selectedEligible, setEligible] = useState("");
  const companyName = Cookies.get("companyName");
  const assetTypes = [
    { id: "1", type: "Web" },
    { id: "2", type: "Mobile" },
    { id: "3", type: "API" },
    { id: "4", type: "Source Code Review" },
    { id: "5", type: "CIDR" },
    { id: "6", type: "IoT" },
  ];

  const handleInAssetTypeChange = (event) => {
    setSelectedInAssetType(event.target.value);
  };
  const handleOutAssetTypeChange = (event) => {
    setSelectedOutAssetType(event.target.value);
  };

  const impactLevel = [
    { id: "1", type: "Critical" },
    { id: "2", type: "High" },
    { id: "3", type: "Medium" },
    { id: "4", type: "Low" },
  ];
  const handleImpactLevelChange = (event) => {
    setImpactLevel(event.target.value);
  };

  const eligibles = [
    { id: "1", type: "Yes" },
    { id: "2", type: "No" },
  ];

  const handleEligibleChange = (event) => {
    setEligible(event.target.value);
  };

  const handleUpdateScope = async () => {
    const myCookie = Cookies.get("myCookie");
    console.log(inAssetName);
    console.log(selectedInAssetType);
    console.log(selectedImpactLevel);
    console.log(selectedEligible);
    const data = {
      myCookie: `${myCookie}`,
      in_scope: {
        asset: `${inAssetName}`,
        asset_type: `${selectedInAssetType}`,
        impact: `${selectedImpactLevel}`,
        elb: `${selectedEligible}`,
      },
      out_scope: {
        asset: `${outAssetName}`,
        asset_type: `${selectedOutAssetType}`,
      },
    };
    const response = await fetch(`http://127.0.0.1:5173/setScope`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jwt = await response.json();
    alert(jwt.status);
    window.location.href = "/ScopeSetting";
  };

  return (
    <>
      <div className="bus-profile">
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <DashboardNavbar />
          </div>
          <div className="bus-profile-div2">
            <h1 className="bus-profile-div2-h">Scope Setting</h1>
            <div className="dashboard">
              <center>
                <div className="bus-profile-header">
                  <img src={Avat} className="bus-profile-company-logo" />
                  <h3 className="bus-profile-company-name">{companyName}</h3>
                </div>
              </center>
              <div className="stats">
                <p className="bus-profie-stat-h">In-Scope</p>
                <div className="bus-profile-stat-div">
                  <form className="dashboard-form">
                    <div className="column-div1">
                      <label className="dashboard-form-label">Asset: </label>
                      <input
                        className="dashboard-input"
                        type="text"
                        value={inAssetName}
                        onChange={(event) => setInAssetName(event.target.value)}
                      />
                    </div>
                    <div className="column-div1">
                      <label className="dashboard-form-label">
                        Asset Type:
                      </label>
                      <select
                        className="dashboard-input"
                        id="assetType"
                        value={selectedInAssetType}
                        onChange={handleInAssetTypeChange}
                      >
                        <option value="">Select Asset Type</option>
                        {assetTypes.map((assettype) => (
                          <option
                            className="dashboard-form-option"
                            id="assetType"
                            key={assettype.id}
                            value={assettype.type}
                          >
                            {assettype.type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="column-div1">
                      <label className="dashboard-form-label">
                        Impact Level:{" "}
                      </label>
                      <select
                        className="dashboard-input"
                        id="impactLevel"
                        value={selectedImpactLevel}
                        onChange={handleImpactLevelChange}
                      >
                        <option value="">Select Impact Level</option>
                        {impactLevel.map((impactlevel) => (
                          <option
                            className="dashboard-form-option"
                            id="impactLevel"
                            key={impactlevel.id}
                            value={impactlevel.type}
                          >
                            {impactlevel.type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="column-div1">
                      <label className="dashboard-form-label">
                        Eligible for Bounty?
                      </label>
                      <select
                        className="dashboard-input input3"
                        id="eligible"
                        value={selectedEligible}
                        onChange={handleEligibleChange}
                      >
                        <option value="">Select Eligibility</option>
                        {eligibles.map((eligible) => (
                          <option
                            className="dashboard-form-option"
                            id="eligible"
                            key={eligible.id}
                            value={eligible.type}
                          >
                            {eligible.type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="bus-profie-stat-h">Out-Scope</p>
                    <div className="column-div1">
                      <label className="dashboard-form-label">Asset: </label>
                      <input
                        className="dashboard-input"
                        type="text"
                        value={outAssetName}
                        onChange={(event) =>
                          setOutAssetName(event.target.value)
                        }
                      />
                    </div>

                    <div className="column-div1">
                      <label className="dashboard-form-label">
                        Asset Type:
                      </label>
                      <select
                        className="dashboard-input"
                        id="outAssetType"
                        value={selectedOutAssetType}
                        onChange={handleOutAssetTypeChange}
                      >
                        <option value="">Select Asset Type</option>
                        {assetTypes.map((assettype) => (
                          <option
                            className="dashboard-form-option"
                            id="outAssetType"
                            key={assettype.id}
                            value={assettype.type}
                          >
                            {assettype.type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div
                      className="button_ani dashboard-button"
                      onClick={handleUpdateScope}
                    >
                      <button type="submit" className="button2">
                        Update Scope
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
};

export default BusinessProfile;
