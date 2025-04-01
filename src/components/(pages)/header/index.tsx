import { IconMenu2 } from "@tabler/icons-react";
import type React from "react";
import type {
	AprilfoolPropsType,
	AprilfoolTypeType,
} from "../../../types/types";

const Header: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	const handleModal = (type: AprilfoolTypeType) => {
		setIsAMOpen(true);
		setType(type);
	};
	return (
		<div className="bg-school-pink flex items-center gap-2.5 sticky top-0 z-50 w-full px-4">
			<img
				src="../../../images/icon.webp"
				alt="蓮ノ空女学院の校章"
				width={80}
				height={80}
				className="w-[60px] h-[60px] m-2.5 no-click lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] sm:w-[70px] sm:h-[70px]"
			/>
			<div>
				<h1 className="text-xl font-bold text-school-blue">蓮ノ空女学院</h1>
				<p className="text-xs text-gray-600">Dream believers, I believe...</p>
			</div>
			<button
				type="button"
				onClick={() => handleModal("normal" as AprilfoolTypeType)}
				className="ml-auto p-2 rounded-full bg-white/90 hover:bg-white/80 transition-colors shadow-md cursor-pointer"
			>
				<IconMenu2 />
			</button>
		</div>
	);
};

export default Header;
