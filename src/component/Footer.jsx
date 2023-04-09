import React, { useState } from "react";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBussinessOpen, setIsBussinessOpen] = useState(false);
  const [isResearcherOpen, setIsResearcherOpen] = useState(false);
  const [isAcademyOpen, setIsAcademeyOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  return (
    <>
      <div className="footer" id="footer">
        <div className="logo">
          <h2>Buggify</h2>
        </div>
        <div
          className={isOpen ? "footer-link footer-mobile-link" : "footer-link"}
        >
          <ul>
            <li className="l1">
              <h3>Bussiness</h3>
              <button
                className="listopen"
                onClick={() => setIsBussinessOpen(!isBussinessOpen)}
              >
                {isOpen ? "" : ""}
                <AiOutlineDown />
              </button>
              <li className={isBussinessOpen ? "mobile-list" : "list"}>
                <a href="/ExploreProgram">Private Red Teaming</a>
              </li>
              <li className={isBussinessOpen ? "mobile-list" : "list"}>
                <a href="/ExploreProgram">Bug Bounty Program</a>
              </li>
            </li>
            <li className="l1">
              <h3>Researchers</h3>
              <button
                className="listopen"
                onClick={() => setIsResearcherOpen(!isResearcherOpen)}
              >
                {isOpen ? "" : ""}
                <AiOutlineDown />
              </button>
              <li className={isResearcherOpen ? "mobile-list" : "list"}>
                <a href="/program">Bug Bounty Programs</a>
              </li>
              <li className={isResearcherOpen ? "mobile-list" : "list"}>
                <a href="/researcher">Researcher Docs</a>
              </li>
              <li className={isResearcherOpen ? "mobile-list" : "list"}>
                <a href="/AcademyGetStarted">Education</a>
              </li>
              <li className={isResearcherOpen ? "mobile-list" : "list"}>
                <a href="/AcademyDiscord">Community</a>
              </li>
              <li className={isResearcherOpen ? "mobile-list" : "list"}>
                <a href="/ProgramLeaderBoard">Leaderboard</a>
              </li>
            </li>
            <li className="l1">
              <h3>Academy</h3>
              <button
                className="listopen"
                onClick={() => setIsAcademeyOpen(!isAcademyOpen)}
              >
                {isOpen ? "" : ""}
                <AiOutlineDown />
              </button>
              <li className={isAcademyOpen ? "mobile-list" : "list"}>
                <a href="/AcademyGetStarted">Start Hacking</a>
              </li>
              <li className={isAcademyOpen ? "mobile-list" : "list"}>
                <a href="/AcademyCourses">Courses</a>
              </li>
              <li className={isAcademyOpen ? "mobile-list" : "list"}>
                <a href="/AcademyAnnouncement">Announcement</a>
              </li>
              <li className={isAcademyOpen ? "mobile-list" : "list"}>
                <a href="/AcademyVideos">Videos</a>
              </li>
              <li className={isAcademyOpen ? "mobile-list" : "list"}>
                <a href="/AcademyBlogs">Blogs</a>
              </li>
              <li className={isAcademyOpen ? "mobile-list" : "list"}>
                <a href="/AcademyDiscord">Discord</a>
              </li>
            </li>
            <li className="l1">
              <h3>About</h3>
              <button
                className="listopen"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                {isOpen ? "" : ""}
                <AiOutlineDown />
              </button>
              <li className={isAboutOpen ? "mobile-list" : "list"}>
                <a href="#">About Us</a>
              </li>
              <li className={isAboutOpen ? "mobile-list" : "list"}>
                <a href="/Contact-us">Contact Us</a>
              </li>
            </li>
          </ul>
        </div>
        <hr
          style={{
            marginTop: "3rem",
            width: " 90%",
            marginLeft: "calc(5% )",
          }}
        ></hr>

        <div className="footer-policy">
          <div className="policy-list">
            <ul>
              <li>
                <a href="#">Copyright@2022 Buggify</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="social-list">
            <ul>
              <li>
                <a href="https://twitter.com/XrootJay">
                  <BsTwitter className="twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cyber._.learn/">
                  <BsInstagram className="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jay-patel-301a371b1">
                  <BsLinkedin className="linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
