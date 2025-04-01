import { IconClockHour4 } from "@tabler/icons-react";
import Link from "next/link";
import type React from "react";
import { useYear } from "../../../hooks/useYear";

const Header: React.FC = () => {
	const { paramYear, realYear } = useYear();
	let message = "";
	if (paramYear === "2024") {
		message = "Dream believers, I believe";
	}
	if (paramYear === "2025") {
		message = "Dream believers, you believe...";
	}

	const timeTravelLink = paramYear === realYear ? "/2024" : `/${realYear}`;
	const timeTravelText = paramYear === realYear ? "2024年に遡る" : "今年に進む";

	return (
		<div className="bg-school-pink flex items-center gap-1 sticky top-0 z-50 w-full px-4">
			<img
				src="../../../images/icon.webp"
				alt="蓮ノ空女学院の校章"
				width={80}
				height={80}
				className="w-[50px] h-[50px] m-2.5 no-click lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] sm:w-[70px] sm:h-[70px]"
			/>
			<div className="flex-grow">
				<h1 className="text-[16px] sm:text-xl font-bold text-school-blue">
					私立蓮ノ空女学院
				</h1>
				<p className="text-[9pt] sm:text-xs text-gray-600">{message}</p>
			</div>

			<Link
				href={timeTravelLink}
				className="px-3 py-2 rounded-full bg-white/90 hover:bg-white/80 transition-colors shadow-md cursor-pointer text-sm text-school-blue font-medium flex items-center gap-1 flex-shrink-0"
			>
				<IconClockHour4 size={18} />
				<span className="hidden sm:inline">{timeTravelText}</span>
				<span className="sm:hidden">
					{paramYear === realYear ? "過去へ" : "現在へ"}
				</span>
			</Link>
		</div>
	);
};

export default Header;
