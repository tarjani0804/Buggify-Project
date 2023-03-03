import React from "react";
import "./Homes2.css";
import { BsInfoLg } from "react-icons/bs";
import { IoBugOutline } from "react-icons/io5";

const homes2 = () => {
	return (
		<>
			<div className="section-2">
				<h2 className="h font-weight-bold">
					Focus on Innovation & Reduce Data Breaches
				</h2>
				<div>
					<p className="fs-5 second-section-p ">
						{" "}
						Buggify has fast triage & Less Response time for Security Researchers
						Enhanced Security Solutions for Companies High Quality Study Resources for
						students willing to make future in Cyber Security.
					</p>
				</div>
				<div className="bg-div">
					<div className="section-second-square">
						<div className=" sq sq1">
							<h2 className="sq-h1">ISO/IEC 27001:2022</h2>
							<h3 className="sq-h2">For Internal & Extenal Pentests</h3>
							<p className="sq-p">
								Our Pentesters follows International Information Security Compliances
								for Maintaining Standards to Save Data and Information Systems against
								Malicious Attacks.
								<br />
								<br />
								We help Organizations to implement an ISMS that meets the requirements
								of the standard.
							</p>
							{/* <div className="sq-span"><BsInfoLg className="sq-icon sq1-icon" /></div> */}

							<br />
						</div>
						<div className=" sq sq2">
							<h2 className="sq-h1">ISO/IEC 29147:2014</h2>
							<h3 className="sq-h2">For Open Source Bug Hunting</h3>
							<p className="sq-p">
								Bug Bounty Platform is Open Source Research Program for Security
								Researchers who finds Loopholes and legally Vulnerability Report to
								Organization.
								<br />
								<br />
								Public Program uses knowledge of Researchers around the world to make
								systems more secure.
							</p>
							{/* <div className="sq-span"><IoBugOutline className="sq-icon sq1-icon" /></div> */}
							<br />
						</div>
						<div className=" sq sq3">
							<h2 className="sq-h1">Disclosure Policy</h2>
							<h3 className="sq-h2">Keeping All Bugs Secret</h3>
							<p className="sq-p">
								Researchers submit Reports about their Pentest on Infrastructure and
								it’s kept secret between organization and researchers by mutual
								agreements.
								<br />
								<br />
								Safe Harbour Policy Allows hackers to pentest in-scope infrastructures
								and NDA helps Organizations to allow disclosure of bug based on their
								policy.
							</p>
							{/* <div className="sq-span"><BsInfoLg className="sq-icon sq1-icon" /></div> */}
							<br />
						</div>
						<div className=" sq sq4">
							<h2 className="sq-h1">MiTRE Att&ck Framework</h2>
							<h3 className="sq-h2">Risk Advisory Tactics & Techniques</h3>
							<p className="sq-p">
								MiTRE Att&ck Frameworks are made to help organizations aware of Risk
								Tactics and Techniques by Threat Actors to keep them safe & Recover
								against Cyber Attacks.
								<br />
								<br />
								During Consulting Our Security Consultant and CISO, they aware
								organizations about Security Policies that must be enforces to maintain
								standards.
							</p>
							{/* <div className="sq-span"><BsInfoLg className="sq-icon sq1-icon" /></div> */}
							<br />
						</div>
					</div>
					<br />
					<vr />
					<br />
				</div>
			</div>
		</>
	);
};
export default homes2;
