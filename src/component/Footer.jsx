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
				<div className={isOpen ? "footer-link footer-mobile-link" : "footer-link"}>
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
								<a href="#">Penetration testing</a>
							</li>
							<li
								className={isBussinessOpen ? "mobile-list" : "list"}
								style={{
									textIndent: " 18px",
								}}
							>
								<a href="#">Private red teaming</a>
							</li>
							<li
								className={isBussinessOpen ? "mobile-list" : "list"}
								style={{
									textIndent: " 18px",
								}}
							>
								<a href="#">Web application pentesting</a>
							</li>
							<li
								className={isBussinessOpen ? "mobile-list" : "list"}
								style={{
									textIndent: " 18px",
									display: isBussinessOpen ? "block" : "none",
								}}
							>
								<a href="#">API pentesting</a>
							</li>
							<li
								className={isBussinessOpen ? "mobile-list" : "list"}
								style={{
									textIndent: " 18px",
									display: isBussinessOpen ? "block" : "none",
								}}
							>
								<a href="#">Mobile App Pentesting</a>
							</li>
							<li
								className={isBussinessOpen ? "mobile-list" : "list"}
								style={{
									textIndent: " 18px",
								}}
							>
								<a href="#">Network Pentesting</a>
							</li>
							<li
								className={isBussinessOpen ? "mobile-list" : "list"}
								style={{
									textIndent: " 18px",
								}}
							>
								<a href="#">Cloud Pentesting</a>
							</li>
							<li
								className={isBussinessOpen ? "mobile-list" : "list"}
								style={{
									textIndent: " 18px",
								}}
							>
								<a href="#">IoT Pentesting</a>
							</li>
							<li
								className={isBussinessOpen ? "mobile-list" : "list"}
								style={{
									textIndent: " 18px",
								}}
							>
								<a href="#">Hardware Pentesting</a>
							</li>
							<li className={isBussinessOpen ? "mobile-list" : "list"}>
								<a href="#">Bug bounty Program</a>
							</li>
							<li className={isBussinessOpen ? "mobile-list" : "list"}>
								<a href="#">Attack surface management</a>
							</li>
							<li className={isBussinessOpen ? "mobile-list" : "list"}>
								<a href="#">Vulnerability Disclosure</a>
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
								<a href="#">Bug Bounty Programs</a>
							</li>
							<li className={isResearcherOpen ? "mobile-list" : "list"}>
								<a href="#">Researcher Docs</a>
							</li>
							<li className={isResearcherOpen ? "mobile-list" : "list"}>
								<a href="#">Latest Collabarations</a>
							</li>
							<li className={isResearcherOpen ? "mobile-list" : "list"}>
								<a href="#">Education</a>
							</li>
							<li className={isResearcherOpen ? "mobile-list" : "list"}>
								<a href="#">Tools</a>
							</li>
							<li className={isResearcherOpen ? "mobile-list" : "list"}>
								<a href="#">Community</a>
							</li>
							<li className={isResearcherOpen ? "mobile-list" : "list"}>
								<a href="#">Leaderboard</a>
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
								<a href="#">Start Hacking</a>
							</li>
							<li className={isAcademyOpen ? "mobile-list" : "list"}>
								<a href="#">Certifications</a>
							</li>
							<li className={isAcademyOpen ? "mobile-list" : "list"}>
								<a href="#">Blogs</a>
							</li>
							<li className={isAcademyOpen ? "mobile-list" : "list"}>
								<a href="#">Webinars</a>
							</li>
							<li className={isAcademyOpen ? "mobile-list" : "list"}>
								<a href="#">Events</a>
							</li>
							<li className={isAcademyOpen ? "mobile-list" : "list"}>
								<a href="#">FAQs</a>
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
								<a href="#">Careers</a>
							</li>
							<li className={isAboutOpen ? "mobile-list" : "list"}>
								<a href="#">Leardership</a>
							</li>
							<li className={isAboutOpen ? "mobile-list" : "list"}>
								<a href="#">Partners</a>
							</li>
							<li className={isAboutOpen ? "mobile-list" : "list"}>
								<a href="#">Customer</a>
							</li>
							<li className={isAboutOpen ? "mobile-list" : "list"}>
								<a href="#">Press Release</a>
							</li>
							<li className={isAboutOpen ? "mobile-list" : "list"}>
								<a href="#">News</a>
							</li>
							<li className={isAboutOpen ? "mobile-list" : "list"}>
								<a href="#">Why Us</a>
							</li>
							<li className={isAboutOpen ? "mobile-list" : "list"}>
								<a href="#">Contact Us</a>
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
								<a href="#">Security</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms & conditions</a>
							</li>
							<li>
								<a href="#">Data Protection Regulation</a>
							</li>
						</ul>
					</div>
					<div className="social-list">
						<ul>
							<li>
								<a href="#">
									<BsTwitter className="twitter" />
								</a>
							</li>
							<li>
								<a href="#">
									<BsInstagram className="instagram" />
								</a>
							</li>
							<li>
								<a href="#">
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
