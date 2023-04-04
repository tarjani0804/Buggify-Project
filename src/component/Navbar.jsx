import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";


function MyList() {
	const items = [
		{ label: "Home", link: "/" },
		{ label: "Company", link: "/company" },
		{ label: "Researchers", link: "/researcher" },
		{ label: "Programs", link: "/program" },
		{ label: "Academy", link: "/AcademyGetStarted" },
	];
	const [navActiveIndex, setNavActiveIndex] = useState(
		items.findIndex((item) => item.link === window.location.pathname)
	);

	const handleNavClick = (index) => {
		setNavActiveIndex(index);
		window.localStorage.setItem("navActiveIndex", index);
	};

	return (

		<ul>
			{items.map((item, index) => (
				<li
					key={index}
					onClick={() => handleNavClick(index)}
					className={navActiveIndex == index ? "active" : ""}
				>
					<Link
						to={item.link}
						style={{
							color: index === navActiveIndex ? "#ffffff" : "#a7a7a7",
						}}
					>
						{item.label}
					</Link>
				</li>
			))}
		</ul>
	);
}



const Navbar = () => {


	const [showMediaIcons, setShowMediaIcons] = useState(false);
	const navigate = useNavigate();
	const gotoLogin = () => {
		navigate('/Login');
	}
	const gotoHome = () => {
		navigate('/')
	}
	const gotoDashboard = () => {
		const buss_id = Cookies.get("buss_id");
		const rsrc_id = Cookies.get("rsrc_id");

		if (buss_id) {
			navigate('/businessProfile');
		}
		else {
			if (rsrc_id) {
				navigate('/ResearcherProfile');
			}
		}
	}
	const [username2, setUsername] = useState("");

	useEffect(() => {
		const storedUsername = Cookies.get("userName")
		if (storedUsername) {
			setUsername(storedUsername);
		}
	}, []);

	const [showLogout, setShowLogout] = useState(false);

	const handleShowLogout = () => {
		if (showLogout) {
			setShowLogout(false);
		} else {
			setShowLogout(true);
		}
	}
	const handleLogout = () => {
		Cookies.remove("username");
		Cookies.remove('companyName');
		Cookies.remove('buss_id');
		Cookies.remove('myCookie');
		Cookies.remove('prog_id');
		Cookies.remove('userName');
		Cookies.remove('rsrc_id');
		navigate("/");
		setUsername("");
		setShowLogout(false);
	}
	const navActiveIndex = Number(window.localStorage.getItem("navActiveIndex"));



	return (
		<>

			<nav className="main-nav">
				<div className="logo">
					<h2 onClick={gotoHome} className="mint">Buggify </h2>
				</div>
				<div
					className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
				>
					<MyList />

					{username2 ? (
						<div className="username-div">
							<div className="username-container">
								<span onClick={handleShowLogout}>{`${username2}`}</span>
							</div>
							{showLogout && (
								<div className="logout-btn" >
									<div style={{
										marginTop: "1rem",
										textAlign: "center",
										width: "inherit"
									}} onClick={gotoDashboard}>
										Dashboard
									</div>
									<div style={{
										marginTop: "1rem",
										textAlign: "center",
										marginBottom: "1rem",
									}} onClick={handleLogout}>
										Logout
									</div>
								</div>
							)}

						</div>
					) : (
						<div className="button_ani try-btn" onClick={gotoLogin}>
							<button className="btn">Try Buggify</button>
						</div>
					)}
				</div>

				<div className="social-media">
					<div className="hamburger-menu">
						<a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
							<BsList />
						</a>
					</div>
				</div>
			</nav>



		</>
	);
};

export default Navbar;
