"use client";

import { useEffect } from "react";

const Home = () => {
	const thisYear = new Date().getFullYear();

	useEffect(() => {
		// /yearにリダイレクト
		if (typeof window !== "undefined") {
			window.location.href = `/${thisYear}`;
		}
	}, [thisYear]);

	return null;
};

export default Home;
