import React, { useState } from "react";
import "./Homes6.css";
import { FcGoogle } from "react-icons/fc";
import { SlSocialFacebook } from "react-icons/sl";
import { BsTwitch } from "react-icons/bs";
import Avt from '../image/avat.jpeg';
import Avt2 from '../image/avat2.jpeg';
import Avt1 from '../image/avat1.png';


function App() {
	const [selected, setSelected] = useState(1);

	return (
		<div className="section-six">
			<h3 className="h1">For Researcher</h3>
			<h1 className="h">What our users think about us? </h1>

			<div>
				<button
					style={{ color: selected === 1 ? "#ffffff" : "#9c9c9c" }}
					onClick={() => setSelected(1)}
					className="business-label"
				>
					Business
				</button>
				<button
					style={{ color: selected === 2 ? "#ffffff" : "#9c9c9c" }}
					onClick={() => setSelected(2)}
					className="reseacher-label"
				>
					Researcher
				</button>
				<hr
					style={{
						border: "none",
						height: "1px",
						backgroundColor: "#878787",
						width: "70%",
						marginLeft: "calc(15%)",
					}}
				/>
				{selected === 1 ? (
					<div className="toggled-div">
						<div className="toggle-div1">
							<p className="div-p">
								The Flexibility of Platform and Amazing Community of Security
								Researchers are Helping make Google Cloud a Secure & Trusted Platform
							</p>
							<div className="div-icon-name">
								<FcGoogle className="div-icon"></FcGoogle>
								<div className="t-d">
									<h3 className="div-h1">Phil Venables</h3>
									<h4 className="div-h2">CISO, Google Cloud</h4>
								</div>
							</div>
						</div>
						<div className="toggle-div2">
							<p className="div-p">
								Buggify Red Team Specialists helped Us to Find Critical Vulnerabilities
								that Could be exploited in Wild, that’s what helped us keeping Our
								Customer’s Data Safe
							</p>
							<div className="div-icon-name">
								<SlSocialFacebook
									className="div-icon"
									style={{
										color: "#ffffff",
										fontSize: "30px",
										backgroundColor: "#3b5998",
										padding: "5px 5px 0px 5px",
										borderRadius: "50%",
									}}
								/>
								<div className="t-d">
									<h3 className="div-h1">Guy Rosen</h3>
									<h4 className="div-h2">CISO, Meta</h4>
								</div>
							</div>
						</div>
						<div className="toggle-div3">
							<p className="div-p">
								We Believe there is immense value in having bug bounty program as our
								Cyber Security Strategy. We Encourage Buggify and Hacker’s Community for
								playing Important Role to Safe Twitch
							</p>
							<div className="div-icon-name">
								<BsTwitch className="div-icon" style={{ color: "#6441a5 " }} />
								<div className="t-d">
									<h3 className="div-h1">Arul Daniel</h3>
									<h4 className="div-h2">CISO, Twitch</h4>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="toggled-div">
						<div className="toggle-div1">
							<p className="div-p">
								As a security researcher and bug bounty hunter, I have had the pleasure
								of using several bug bounty platforms throughout my career, and I must say
								that these platforms have revolutionized the way we approach security testing.
							</p>
							<div className="div-icon-name">
								<img src={Avt} className="div-icon1" />
								<div className="t-d1">
									<h3 className="div-h1">Nagli</h3>
									<h4 className="div-h2">Security Researcher</h4>
								</div>
							</div>
						</div>
						<div className="toggle-div2">
							<p className="div-p">
								Buggify is a fantastic bug bounty platform that has helped me to grow my skills as a security researcher. I appreciate the transparency,
								variety of programs,
								and sense of community that the platform provides.
							</p>
							<div className="div-icon-name">
								<img src={Avt2} className="div-icon1" />
								<div className="t-d1">
									<h3 className="div-h1">Frans Rosen,</h3>
									<h4 className="div-h2">Security Researcher</h4>
								</div>
							</div>
						</div>
						<div className="toggle-div3">
							<p className="div-p">
								The platform has a wide variety of programs,
								ranging from small startups to large corporations,
								and offers opportunities for both beginner and experienced researchers. The user interface is intuitive and easy to navigate,
								and the platform offers great resources.
							</p>
							<div className="div-icon-name">
								<img src={Avt1} className="div-icon1" />
								<div className="t-d1">
									<h3 className="div-h1">Deltas3c</h3>
									<h4 className="div-h2">Security Researcher</h4>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
