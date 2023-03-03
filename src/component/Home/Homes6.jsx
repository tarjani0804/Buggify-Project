import React, { useState } from "react";
import "./Homes6.css";
import { FcGoogle } from "react-icons/fc";
import { SlSocialFacebook } from "react-icons/sl";
import { BsTwitch } from "react-icons/bs";

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
						<div className="toggle-div3">
							<p className="div-p">
								f Platform and Amazing Community of Security Researchers are Helping
								make Google Cloud a Secure & Trusted Platform
							</p>
							<div className="div-icon-name">
								<FcGoogle className="div-icon"></FcGoogle>
								<div className="t-d">
									<h3 className="div-h1">Phil Venables</h3>
									<h4 className="div-h2">CISO, Google Cloud</h4>
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
