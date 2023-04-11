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
import { ToastContainer, toast } from "react-toastify";

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
        <li onClick={gotoRewardUpdate} className="dashboard-link">
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

const BusinessProfile = (props) => {
  const [assetSeverity, setAssetSeverity] = useState("");
  const [currentPayout, setCurrentPayout] = useState("");
  const [newPayout, setNewPayout] = useState("");
  const myCookie = Cookies.get("myCookie");
  const data = {
    myCookie: `${myCookie}`,
    low: ``,
    medium: ``,
    high: ``,
    critical: ``,
  };

  const alerts = (mess) => {
    toast.success(mess, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const alertWrong = () => {
    toast.error("Wrong Asset Severity", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const companyName = Cookies.get("companyName");
  const handleRewardUpdate = async () => {
    if (assetSeverity == "low" || assetSeverity == "LOW") {
      data.low = newPayout;
      const response = await fetch(`http://127.0.0.1:5173/setReward`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jwt = await response.json();
      const mess = jwt.status;
      window.location.href = "/rewardUpdate";
      alerts(mess);
    } else {
      if (assetSeverity == "medium" || assetSeverity == "MEDIUM") {
        data.medium = newPayout;
        const response = await fetch(`http://127.0.0.1:5173/setReward`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const jwt = await response.json();
        const mess = jwt.status;
        window.location.href = "/rewardUpdate";
        alerts(mess);
      } else {
        if (assetSeverity == "high" || assetSeverity == "HIGH") {
          data.high = newPayout;
          const response = await fetch(`http://127.0.0.1:5173/setReward`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const jwt = await response.json();
          const mess = jwt.status;
          window.location.href = "/rewardUpdate";
          alerts(mess);
        } else {
          if (assetSeverity == "critical" || assetSeverity == "CRITICAL") {
            data.critical = newPayout;
            const response = await fetch(`http://127.0.0.1:5173/setReward`, {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const jwt = await response.json();
            const mess = jwt.status;
            window.location.href = "/rewardUpdate";
            alerts(mess);
          } else {
            alertWrong();
          }
        }
      }
    }
  };

  return (
    <>
      <div className="bus-profile">
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <DashboardNavbar />
          </div>
          <div className="bus-profile-div2">
            <ToastContainer />
            <center>
              <h1 className="bus-profile-div2-h">Reward Update</h1>
              <div className="bus-profile-header">
                <img src={Avat} className="bus-profile-company-logo" />
                <h3 className="bus-profile-company-name">
                  {companyName}
                </h3>
              </div>
            </center>
            <div className="stats">

              <div className="bus-profile-stat-div">
                <form className="dashboard-form">
                  <div className="column-div1">
                    <label className="dashboard-form-label label">
                      Asset Severity:{" "}
                    </label>
                    <input
                      className="dashboard-input input"
                      type="text"
                      value={assetSeverity}
                      onChange={(event) => setAssetSeverity(event.target.value)}
                    />
                  </div>
                  <div className="column-div1">
                    <label className="dashboard-form-label">
                      Curent Payout:{" "}
                    </label>
                    <input
                      className="dashboard-input input"
                      type="text"
                      value={currentPayout}
                      onChange={(event) => setCurrentPayout(event.target.value)}
                    />
                  </div>
                  <div className="column-div1">
                    <label className="dashboard-form-label ">
                      New Payout:{" "}
                    </label>
                    <input
                      className="dashboard-input input"
                      type="text"
                      value={newPayout}
                      onChange={(event) => setNewPayout(event.target.value)}
                    />
                  </div>
                  <p className="dashboard-reward-update-note">
                    Note : Do Not Insert $ symbol as all payout is calculated in
                    US dollar by default
                  </p>
                  <div
                    className="button_ani dashboard-button"
                    onClick={handleRewardUpdate}
                  >
                    <button type="submit" className="button2">
                      Change Reward
                    </button>
                  </div>
                </form>
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
