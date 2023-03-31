import React, { useState, useEffect } from "react";
// import '../ResearcherProfile.css';
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
import { toast, ToastContainer } from "react-toastify";

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
        <li onClick={gotoResearcherProfile}>
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
        <li className="dashboard-link" onClick={gotoNotification}>
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

const ResearcherNotification = (props) => {
  const [notificationList, setNotificationList] = useState();
  const [mess, setMess] = useState(undefined);
  const navigate = useNavigate();
  const gotoReportInfo = () => {
    alert(notificationList[val].report_id);
    Cookies.set("report_id", `${notificationList[val].report_id}`, {
      expires: 14,
      path: "/",
    });
    navigate("/researcher-ReportInfo");
  };

  // data incoming for notification
  useEffect(() => {
    async function fetchProfileStats() {
      const myCookie = Cookies.get("myCookie");
      const data = {
        myCookie: `${myCookie}`,
      };
      const response = await fetch(`http://127.0.0.1:5173/notifications`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jwt = await response.json();
      setNotificationList(jwt);

      if (jwt.status == "There is not any Notification for you") {
        setMess(jwt.status);
      }

    }
    fetchProfileStats();
  }, []);

  const username = Cookies.get("username")

  console.log(notificationList);
  const notifications = [];
  if (notificationList) {
    for (let i = 0; i < notificationList.length; i++) {
      const noti = notificationList[i];
      notifications.push(
        <div key={noti.id} >
          <div
            style={{
              display: "flex",
              position: "relative",
              paddingTop: "2rem",
            }}
          >
            <p
              style={{
                color: "#ffffff",
                fontSize: "14px",
                margin: "2rem 5rem 2rem 2rem",
                lineHeight: "2.8rem",
                letterSpacing: "1px",
              }}
            >
              {noti.report_title}
            </p>
            <p
              style={{
                position: "absolute",
                right: "5rem",
                textDecoration: "underline",
                color: "#04ff69 ",
                fontSize: "14px",
                lineHeight: "2.8rem",
                letterSpacing: "1px",
                margin: "2rem 5rem 2rem 2rem",
                cursor: "pointer",
              }}
              onClick={(event) => handleSubmit1(event, i)}
            >
              Check
            </p>
          </div>
        </div>
      );
    }
  }

  const gotoReportInfoUpdate = (val) => {
    Cookies.set("report_id", `${notificationList[val].report_id}`, {
      expires: 14,
      path: "/",
    });
    navigate("/researcher-ReportInfo");
  };


  const handleSubmit1 = (event, id) => {
    gotoReportInfoUpdate(id);
  };
  return (
    <>
      <div className="res-profile">
        <ToastContainer />
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <ResearcherNavbar />
          </div>

          <div className="bus-profile-div2">
            <h1 className="bus-profile-div2-h">Notification</h1>
            <div className="dashboard">
              <center>
                <div className="bus-profile-header">
                  <img src={Avat} className="bus-profile-company-logo" />
                  <h3 className="bus-profile-company-name">
                    {username}
                  </h3>
                </div>
              </center>
              <div className="track-report">
                <div className="track-reports-div">
                  <div className="res-track-report-list-div">

                    {mess ? (
                      <p style={{
                        color: "#878787",
                        fontSize: "14px",
                        margin: "2rem 5rem 2rem 2rem",
                        lineHeight: "2.8rem",
                        letterSpacing: "1px",
                      }}>
                        {mess}
                      </p>
                    ) : (
                      <>
                        {notifications}
                      </>
                    )}

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
ResearcherNotification.defaultProps = {
  researcherAvtar: "",
  rUsername: "User Name",
  company: [
    {
      id: "1",
      companyName: "xyz",
      reportLink: "",
    },
    {
      id: "2",
      companyName: "abc",
      reportLink: "",
    },
  ],
};

export default ResearcherNotification;
