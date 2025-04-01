import type React from "react";

import CommonCard from "../../(parts)/commoncard";

import type { AprilfoolPropsType } from "../../../types/types";

const Exam: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	const CommonCardProps = {
		setIsAMOpen: setIsAMOpen,
		setType: setType,
	};
	return (
		<div className="white-background-root">
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
