export type AprilfoolTypeType = "normal" | "special";

export type AprilfoolPropsType = {
	isAMOpen: boolean;
	setIsAMOpen: (value: boolean) => void;
	type: AprilfoolTypeType;
	setType: (value: AprilfoolTypeType) => void;
};
