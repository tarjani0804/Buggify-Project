import React from "react";
import "./Homes1.css";

import Image from "../image/Image.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardImg from "react-bootstrap/esm/CardImg";

import { BsInfoLg } from "react-icons/bs";
import { IoBugOutline } from "react-icons/io5";

const homes1 = () => {
	return (
		<>
			<div className="h1">
				<div className="card1">
					<div className="card-body">
						<div className="card-text">
							<div>
								<div className="hr-div">
									<hr className="hr-1" />
									<hr className="hr-2" />
								</div>
								<h3 className="font-weight-bold card-text-h mt-2">
									Asia's No.1 Bug Bounty Platform
									<br /> & <br />
									Cyber Security Academy
								</h3>
								<br />
								<p className="fs-5 card-text-p">

									Buggify has fast triage & Less Response time for Security Researchers
									Enhanced Security Solutions for Companies High Quality Study Resources
									for students willing to make future in Cyber Security
								</p>
								<br />
								<div className="second-hr-div">
									<hr className="second-hr-1" />
									<hr className="second-hr-2" />
								</div>
							</div>

							<div className="button_ani home-button"><Button className="button ">Why Buggify</Button></div>
						</div>
						<Card.Img src={Image} className="card-img" />
					</div>
				</div>
			</div>

		</>
	);
};

export default homes1;
