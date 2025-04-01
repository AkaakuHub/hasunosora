import type React from "react";

const Header: React.FC = () => {
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
				<h1 className="text-xl font-bold text-blue-800">蓮ノ空女学院</h1>
				<p className="text-xs text-gray-600">Dream believers, I believe...</p>
			</div>
		</div>
	);
};

export default Header;
