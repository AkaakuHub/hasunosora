import type React from "react";

import "./index.css";

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
			className="common-card-root"
			onClick={() => {
				setIsAMOpen(true);
				setType("normal");
			}}
		>
			<img src={imageURL} alt={title} className="no-click common-card-image" />
			<div className="common-card-content">
				<h2 className="common-card-title">{title}</h2>
				<p className="common-card-body">{body}</p>
			</div>
		</button>
	);
};

export default CommonCard;
