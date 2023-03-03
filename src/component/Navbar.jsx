import React, { useState } from "react";
import "./Navbar.css";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function MyList() {
	const items = [
		{ label: "Home", link: "/" },
		{ label: "Company", link: "/company" },
		{ label: "Researchers", link: "/researcher" },
		{ label: "Programs", link: "/program" },
		{ label: "Academy", link: "/AcademygetStarted" },
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
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [showMediaIcons, setShowMediaIcons] = useState(false);
	const navigate = useNavigate();
	const gotoLogin = () => {
		navigate('/Login');
	}
	const gotoHome = () => {
		navigate('/')
	}

	// login form ma login button click kare taire aa handle ma setIsLoggedIn in value true thase 
	// tho isLoggedIn valu div (i.e. userName ) display thase tho aa login form ma aa handle avu joiye ne 

	const handleLogin = () => {
		// Perform login logic...
		setIsLoggedIn(true);
	}
	const buttonContent = isLoggedIn ? 'Welcome, John' : 'Try Buggify';

	const navActiveIndex = Number(window.localStorage.getItem("navActiveIndex"));


	return (
		<>

			<nav className="main-nav">
				<div className="logo">
					<h2 onClick={gotoHome} className="mint">Buggify</h2>
				</div>
				<div
					className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
				>
					<MyList />

					{isLoggedIn ? (
						<div className="button_ani try-btn">
							<button className="btn">Welcome, John</button>
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
