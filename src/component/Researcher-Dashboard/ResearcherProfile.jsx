import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsJournalBookmark } from "react-icons/bs";
import {
  RiFolderHistoryLine,
  RiLogoutBoxRLine,
  RiQuestionLine,
} from "react-icons/ri";
import { IoSettingsOutline, IoNotificationsSharp } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SiBigbluebutton } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { TbReportSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Avat from "../image/avat1.png";
import Cookies from "js-cookie";

function ResearcherNavbar() {
  const rsrc_id = Cookies.get('rsrc_id');
  if(rsrc_id == undefined){
    window.location.href = "/";
  }
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navigate = useNavigate();
  const gotoResearcherProfile = () => {
    Navigate("/researcherProfile");
  };
  const gotoTrackReports = () => {
    Navigate("/track-report");
  };
  const gotoBuountyHistory = () => {
    Navigate("/bounty-history");
  };
  const gotoBookmarkedProgram = () => {
    Navigate("/bookmarked-program");
  };
  const gotoNotification = () => {
    Navigate("/dashboard-notification");
  };
  const gotoSetting = () => {
    Navigate("/dashboard-settings");
  };

  const gotoFAQs = () => {
    Navigate("/researcherFAQs");
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
        <li className="dashboard-link" onClick={gotoResearcherProfile}>
          <span className="navbar-menu-icon">
            <ImProfile />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Researcher Profile</span>
          )}
        </li>
        <li onClick={gotoTrackReports}>
          <span className="navbar-menu-icon" style={{ color: "#ffffff" }}>
            <TbReportSearch />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Track Report</span>}
        </li>

        <li onClick={gotoBuountyHistory}>
          <span className="navbar-menu-icon">
            <RiFolderHistoryLine />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Bounty History</span>
          )}
        </li>
        <li onClick={gotoBookmarkedProgram}>
          <span className="navbar-menu-icon">
            <BsJournalBookmark />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Bookmarked Program</span>
          )}
        </li>
        <li onClick={gotoNotification}>
          <span className="navbar-menu-icon">
            <IoNotificationsSharp />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Notification</span>}
        </li>
        <li onClick={logout}>
          <span className="navbar-menu-icon">
            <RiLogoutBoxRLine />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
        </li>
        <hr className={`navbar-hr ${isMenuOpen ? "open" : ""}`} />

        <li onClick={gotoSetting}>
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

const ResearcherProfile = (props) => {

  const rsrc_id = Cookies.get("rsrc_id")
  const [bountyList, setBountyList] = useState()
  useEffect(() => {
    async function fetchProfileStats() {
      const response = await fetch(`http://127.0.0.1:5173/profileRes/${rsrc_id}`);
      const jwt = await response.json();
      setBountyList(jwt);
    }
    fetchProfileStats();
  }, []);
  console.log(bountyList);
  Cookies.set("username", `${bountyList && bountyList.username}`, { expires: 2, path: "/" });
  return (
    <>
      <div className="res-profile">
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <ResearcherNavbar />
          </div>
          <div className="bus-profile-div2">
            <h1 className="bus-profile-div2-h">Researcher Profile</h1>
            <div className="dashboard">
              <center>
                <div className="bus-profile-header">
                  <img src={Avat} className="bus-profile-company-logo" />
                  <h3 className="bus-profile-company-name">
                    {bountyList && bountyList.username}
                  </h3>
                </div>
              </center>
              <div className="stats">
                <div className="res-profile-div">
                  <div className="res-column-div1">
                    <label className="res-profile-label">Researcher Id: </label>
                    <span className="res-profile-span">{rsrc_id}</span>
                  </div>
                  <div className="res-column-div1">
                    <label className="res-profile-label">Email: </label>
                    <span className="res-profile-span">{bountyList && bountyList.email}</span>
                  </div>
                  <div className="res-column-div1">
                    <label className="res-profile-label">Country: </label>
                    <span className="res-profile-span">{bountyList && bountyList.country}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ResearcherProfile.defaultProps = {
  researcherAvtar: "",
  rUsername: "Tarjani Patel",
  rId: "12343214",
  rEmail: "acd@zxt.com",
  country: "India",
  sReports: "125",
  oReports: "10",
  cReports: "15",
};

export default ResearcherProfile;
