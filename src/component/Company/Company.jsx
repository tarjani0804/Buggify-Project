import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import "./Company.css";
import { useNavigate } from "react-router-dom";
import CompanyImg1 from "../image/Company-section-1.png";
import CompanyImg2 from "../image/Company-section-3-1.png";
import CompanyImg3 from "../image/Company-section-3-2.png";
import CompanyImg4 from "../image/Company-section-3-3.png";
import CompanyImg5 from "../image/Company-section-3-4.png";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import CompanyProduct1 from '../image/CompanyProduct1.png'
import CompanyProduct2 from '../image/CompanyProduct2.png'
import CompanyProduct3 from '../image/CompanyProduct3.png'
import CompanyProduct4 from '../image/CompanyProduct4.png'
import CompanyProduct5 from '../image/CompanyProduct5.png'
import CompanyProduct6 from '../image/CompanyProduct6.png'
import CompanyProduct7 from '../image/CompanyProduct7.png'
import CompanyProduct8 from '../image/CompanyProduct8.png'

import Amazon from '../image/companyLogo/amazon.png';
import Intel from '../image/companyLogo/intel.png';
import Alienware from '../image/companyLogo/alienware.png';
import Twitch from '../image/companyLogo/twitch.png';
import Google from '../image/companyLogo/google.png';
import Instagram from '../image/companyLogo/instagram.png';
import Dell from '../image/companyLogo/dell.png';
import Asus from '../image/companyLogo/asus.png';
import Lenovo from '../image/companyLogo/lenovo.png';
import Facebook from '../image/companyLogo/facebook.png';
import Bentley from '../image/companyLogo/bentley.png';
import Apollo from '../image/companyLogo/apollo.png';
import BMW from '../image/companyLogo/bmw.png';
import HP from '../image/companyLogo/hp.png';
import LandRover from '../image/companyLogo/landRover.png';
import Mercedes from '../image/companyLogo/mercedes.png';
import Microsoft from '../image/companyLogo/microsoft.png';


// const [allImages, setAllImages] = useState([CompanyProduct1, CompanyProduct2, CompanyProduct3, CompanyProduct4, CompanyProduct5, CompanyProduct6, CompanyProduct7, CompanyProduct8])



function Company() {
	const navigate = useNavigate();
	const gotoPrograms = () => {
		navigate('/ExploreProgram');
	}
	const gotoLogin = () => {
		navigate('/Login');
	}

	const [firstIndex, setFirstIndex] = useState(0);
	const images = [CompanyProduct1, CompanyProduct2, CompanyProduct3, CompanyProduct4, CompanyProduct5, CompanyProduct6, CompanyProduct7, CompanyProduct8];
	const maxIndex = images.length - 2;

	const handleLeftIconClick = () => {
		const newIndex = firstIndex - 2;
		setFirstIndex(newIndex < 0 ? maxIndex - (Math.abs(newIndex) % (maxIndex + 2)) : newIndex);
	};

	const handleRightIconClick = () => {
		const newIndex = firstIndex + 2;
		setFirstIndex(newIndex > maxIndex ? newIndex % (maxIndex + 2) : newIndex);
	};
	// change for section 5

	const slides = [
		{ src: Amazon },
		{ src: Intel },
		{ src: LandRover },
		{ src: Alienware },
		{ src: Microsoft },
		{ src: Apollo },
		{ src: Twitch },
		{ src: BMW },
		{ src: Google },
		{ src: Mercedes },
		{ src: Instagram },
		{ src: Lenovo },
		{ src: Asus },
		{ src: Facebook },
		{ src: Dell },
		{ src: Bentley },
		{ src: HP },
		// { src: Amazon },
	];
	const slides2 = [
		{ src: Mercedes },
		{ src: Google },
		{ src: Asus },
		{ src: Instagram },
		{ src: BMW },
		{ src: Dell },
		{ src: Lenovo },
		{ src: HP },
		{ src: Intel },
		{ src: LandRover },
		{ src: Twitch },
		{ src: Alienware },
		{ src: Apollo },
		{ src: Facebook },
		{ src: HP },
		{ src: Bentley },
		{ src: Amazon },
		{ src: Microsoft },
	];
	const slides3 = [
		{ src: HP },
		{ src: Bentley },
		{ src: Google },
		{ src: LandRover },
		{ src: HP },
		{ src: Facebook },
		{ src: Apollo },
		{ src: BMW },
		{ src: Amazon },
		{ src: Dell },
		{ src: Intel },
		{ src: Alienware },
		{ src: Microsoft },
		{ src: Asus },
		{ src: Instagram },
		{ src: Twitch },
		{ src: Lenovo },
		{ src: Mercedes },
	];

	return (




		<>
			<div className="company">
				<div className="section-1">
					<div className="part-1">
						<h1 className="section-1-part-1-h">
							<span style={{ color: "#04FF69" }}>Penetration Testing</span> for an{" "}

							Organization.
						</h1>
						<p className="section-1-part-1-p">
							Penetration Testing as a Service from Buggify Covers Various Aspects of
							Data Protection, Regulation & Governance.
						</p>
						<div className="section-1-part-1-button">
							<div className="button_ani section-1-part-1-btn1 " onClick={gotoPrograms}>
								<button className="button2">
									Enroll in Program
								</button>
							</div>

						</div>
					</div>
					<div className="part-2">
						<img src={CompanyImg1} className="section-1-part-2-img"></img>
					</div>
				</div>

				<div className="section-2">
					<h2 className="section-2-h h3">Why Penetration Testing as a Service?</h2>
					<div className="section-2-div">
						<div className="section-2-div1">
							<h3 className="section-2-div-h">High in Transparancy</h3>
							<p className="section-2-div-p">
								Vulnerability Disclosure Reports are Directly Provided to Organization
								without 3rd Party engagement of Other Organization. Every Reports will
								be provided Personal Triagger. Reports can be tracked through Business
								Dashboard. Transparent Process Between Pentester & Organization will be
								maintained.
							</p>
						</div>
						<div className="section-2-div2">
							<h3 className="section-2-div-h">Flexible & Impactful</h3>
							<p className="section-2-div-p">
								Red Team Engagement Provides Flexible Testing according to
								Organization’s Needs. Vulnerability Disclosure Program uses Public
								Sourcing to Patch Impactful Bugs in Systems that Reduces Potential
								Attack Vectors. Meet compliance goals (PCI, NIST, ISO 27001) and surpass
								them by incentivizing pentesters for results.
							</p>
						</div>
						<div className="section-2-div3">
							<h3 className="section-2-div-h">Easy Scaling & More Speed</h3>
							<p className="section-2-div-p">
								Organization can easily scale scope of Assets for Increase or Decrease
								Testing based on Priorities. Customized Testing Methodologies of Testing
								can be Applied. Red Team Engagement & Vulnerability Disclosure Program
								provides Speedy Fixing of Vulnerable Attack Surface.
							</p>
						</div>
					</div>
				</div>

				<div className="section-3">
					<div className="section-3-div">
						<div className="section-3-div1">
							<div className="section-3-div-image img-1">
								<img src={CompanyImg2} className="section-3-div-img"></img>
							</div>
							<div className="section-3-div-content">
								<h3 className="section-3-div-h1">Business Dashboard</h3>
								<h2 className="section-3-div-h2">
									<span style={{ color: "#04ff69" }}>Dashboard</span> to handle things in
									easy way as they happen.
								</h2>
								<p className="section-3-div-p">
									Every Submitted Bugs can be Prioritize according to their severity.
									Personal Pentest Reports can be easily tracked. It is Specifically
									Designed to Monitor Pentest 24/7. After Completion of Pentest, You can
									download Pentest Report directly from Dashboard. (<a href="#" style={{ color: "#878787", textDecoration: "underline" }}>See Sample Report</a>)
								</p>
							</div>
						</div>
						<div className="section-3-div2">
							<div className="section-3-div-content content-2">
								<h3 className="section-3-div-h1">
									Choose Pentesters According to Your Needs
								</h3>
								<h2 className="section-3-div-h2">
									<span style={{ color: "#04ff69" }}>Highly Qualified</span> Testers for
									Pentesting Your Systems.
								</h2>
								<p className="section-3-div-p">
									Each Unique Systems Requires Testers According to Masters in Specific
									Area of Pentesting. Buggify provides team or individuals that are
									Experienced and can be chosen as a Team. Teams Can be Customized
									According to Changing Needs. Look at Our Top Hackers From Globe at
									Leaderboard.
								</p>
							</div>
							<div className="section-3-div-image img-2">
								<img src={CompanyImg3} className="section-3-div-img"></img>
							</div>
						</div>
						<div className="section-3-div3">
							<div className="section-3-div-image img-1">
								<img src={CompanyImg4} className="section-3-div-img"></img>
							</div>
							<div className="section-3-div-content">
								<h3 className="section-3-div-h1">Competitive Testing</h3>
								<h2 className="section-3-div-h2">
									Hackers Earn Different{" "}
									<span style={{ color: "#04ff69" }}>Skill Badges</span> According to
									Their Levels
								</h2>
								<p className="section-3-div-p">
									Different Area of Testing Consists of Various Badges like Web Pwnner,
									Network Nugget, IoT Crackers, Hardware Hardcore, Malware Master, etc.
									Using this Best Pentesters According to Your Needs can be found. Even
									Level Badges are there for OWASP, SANS, NIST Standards, etc.
								</p>
							</div>
						</div>
						<div className="section-3-div4  ">
							<div className="section-3-div-content content-2">
								<h3 className="section-3-div-h1">Continuous Analysis</h3>
								<h2 className="section-3-div-h2">
									Organization Can <span style={{ color: "#04ff69" }}>Monitor </span>For
									Security Reports & Submissions.
								</h2>
								<p className="section-3-div-p p-4">
									Bug Report Submissions can be tracked and continuously monitored for
									How many Bugs Found Over Periods. Re-Testing Like Policies can be
									Applied through Sustainable Programs. It Can be Used to Reduce Risks.
									Old Reports can be Re-Open to Avoid Duplicates.
								</p>
							</div>
							<div className="section-3-div-image img-2">
								<img src={CompanyImg5} className="section-3-div-img"></img>
							</div>
						</div>
					</div>
				</div>

				<div className="section-4">
					<h2 className="section-4-h">Our Products</h2>
					<h1 className="section-4-h2">
						Optimized Products for Various Cyber Security Requirements in{" "}
						<span style={{ color: "#04ff69" }}>Race of Technology</span>
					</h1>
					<div className="section-4-div">
						<span className="section-4-div-leftArrow">

							<BsFillArrowLeftCircleFill
								className="arrow-left-icon"
								onClick={handleLeftIconClick}
							/>
						</span>
						<div className="section-4-div1">
							<img src={images[firstIndex]} className="section-4-div-img1" />
							<img src={images[firstIndex + 1]} className="section-4-div-img2" />

						</div>

						<div className="section-4-div-rightArrow">
							<BsFillArrowRightCircleFill
								className="arrow-right-icon"
								onClick={handleRightIconClick}
							/>
						</div>
					</div>
				</div>

				{/* Section-5 */}
				<div className="section-5">

					<div className="section5-container">
						<div className="section-5-slider" >
							{slides.map((slide, index) => (
								<div className="section5-slide" key={index}>
									<div className="section5-content">
										<img src={slide.src} className="section-5-content-img" />
									</div>
								</div>
							))}
						</div>


						<div className="section-5-slider2" >
							{slides2.map((slide2, index) => (
								<div className="section5-slide2" key={index}>
									<div className="section5-content">
										<img src={slide2.src} className="section-5-content-img" />
									</div>
								</div>
							))}
						</div>
						<div className="section-5-slider3" >
							{slides3.map((slide3, index) => (
								<div className="section5-slide" key={index}>
									<div className="section5-content">
										<img src={slide3.src} className="section-5-content-img" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>


				<div className="section-6">
					<div className="section-6-div1">
						<h1 className="section-6-div1-h">Get started with <span style={{
							color: "#04ff69"
						}}>Buggify</span></h1>
						<div className="section-6-display-flex">
							<p className="section-6-div1-p">Be Quick to Secure Your Assets, Before Hacker Attacks.</p>

							<div className="section-6-button" >
								<div className="button_ani  section-6-button1" onClick={gotoLogin}>
									<button className="btn" >
										Try Buggify
									</button>
								</div>
								<div className="button_ani section-6-button2">
									<button className="button2">
										Contact Us
									</button>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}

export default Company;
