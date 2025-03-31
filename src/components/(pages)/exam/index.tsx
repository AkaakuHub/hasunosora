import React from "react";
import { Heading } from "../../(parts)/heading";

import CommonCard from "../../(parts)/commoncard";

import { AprilfoolPropsType } from "../../../types";

const Exam: React.FC<AprilfoolPropsType> = ({
	isAMOpen,
	setIsAMOpen,
	type,
	setType,
}) => {
	const CommonCardProps = {
		setIsAMOpen: setIsAMOpen,
		setType: setType,
	};
	return (
		<div className="white-background-root">
			<Heading as="h1">入試情報</Heading>
			<div className="common-card-container">
				<CommonCard
					title="過去問"
					body="過年度の入学試験についてはこちら"
					imageURL="/thumbnail/kakomon.webp"
					{...CommonCardProps}
				/>
				<CommonCard
					title="入学試験"
					body="来年度の入学試験についてはこちら"
					imageURL="/thumbnail/nyuushi.webp"
					{...CommonCardProps}
				/>
			</div>
		</div>
	);
};

export default Exam;
