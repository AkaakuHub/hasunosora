import type React from "react";
import CommonCard from "../../(parts)/commoncard";
import { Heading } from "../../(parts)/heading";
import type { AprilfoolPropsType } from "../../../types/types";

const Exam: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	const CommonCardProps = {
		setIsAMOpen: setIsAMOpen,
		setType: setType,
	};
	return (
		<div className="p-4 rounded-b-lg my-48 bg-gradient-to-t from-white via-white/80 to-transparent">
			<Heading as="h1">学校生活</Heading>
			<div className="flex flex-wrap gap-4 justify-center">
				<CommonCard
					title="学生寮"
					body="寮生活についての情報です。"
					imageURL="/thumbnail/ryouseikatsu.webp"
					{...CommonCardProps}
				/>
				<CommonCard
					title="施設"
					body="充実した施設を紹介します。"
					imageURL="/thumbnail/shisetsu.webp"
					{...CommonCardProps}
				/>
			</div>
		</div>
	);
};

export default Exam;
