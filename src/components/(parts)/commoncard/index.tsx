import React from "react";

import "./index.css";

import { AprilfoolTypeType } from "../../../types";

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
		<div
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
		</div>
	);
};

export default CommonCard;
