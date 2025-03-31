import type React from "react";
import type { AprilfoolTypeType } from "../../../types/types";

type Props = {
	title: string;
	body: string;
	imageURL: string;
	setIsAMOpen: (value: boolean) => void;
	setType: (value: AprilfoolTypeType) => void;
};

const CommonCard: React.FC<Props> = ({
	title,
	body,
	imageURL,
	setIsAMOpen,
	setType,
}) => {
	return (
		<button
			type="button"
			className="border-2 border-solid border-[#999999] w-[300px] h-[calc(300px+6em)] rounded-[1em] cursor-pointer hover:bg-[#c8c8c8] transition-colors"
			onClick={() => {
				setIsAMOpen(true);
				setType("normal");
			}}
		>
			<img
				src={imageURL}
				alt={title}
				className="pointer-events-none select-none w-[300px] h-[300px] rounded-[1em] hover:opacity-80 transition-opacity"
			/>
			<div className="p-4">
				<h2 className="m-0">{title}</h2>
				<p className="m-0">{body}</p>
			</div>
		</button>
	);
};

export default CommonCard;
