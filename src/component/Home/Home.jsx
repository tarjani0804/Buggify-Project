import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Homes1 from "./Homes1";
import Homes2 from "./Homes2";
import Homes3 from "./Homes3";
import Homes4 from "./Homes4";
import Homes5 from "./Homes5";
import Homes6 from "./Homes6";

import Homes7 from "./Homes7";
import Homes8 from "./Homes8";
import Homes9 from "./Homes9";

function Home() {

	const scrollRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (scrollTo === "homes8" && scrollRef.current) {
			setTimeout(() => {
				console.log("scrolling to Homes8");
				scrollRef.current.scrollIntoView();
			}, 10);
		}
	}, [scrollTo, scrollRef]);


	return (
		<>
			<Homes1 />
			<Homes2 />
			<Homes3 />
			<Homes4 />
			<Homes5 />
			<Homes6 />

			<Homes7 />
			<Homes8 ref={scrollRef} />
			<Homes9 />
		</>
	);
}

export default Home;
