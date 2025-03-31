import React from "react";
import { Heading } from "../../(parts)/heading";

import "./index.css";

const About: React.FC = () => {
	return (
		<div className="background-root">
			{/* <Heading as="h1">蓮ノ空女学院について</Heading> */}
			<div className="about-text-wrapper">
				<p className="about-text-1 paragraph">蓮の花咲く湖の傍に建つ</p>
				<p className="about-text-2 paragraph">創立から100年以上の伝統が続く</p>
			</div>
			<div className="about-text-wrapper-2">
				<p className="about-text-3 paragraph2">私立蓮ノ空女学院</p>
			</div>
		</div>
	);
};

export default About;
