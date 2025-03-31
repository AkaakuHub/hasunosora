import type React from "react";

const Header: React.FC = () => {
	return (
		<div className="bg-school-pink flex items-center gap-2.5">
			<img
				src="../../../images/icon.webp"
				alt="蓮ノ空女学院の校章"
				width={100}
				height={100}
				className="w-[100px] h-[100px] m-2.5 no-click lg:w-[100px] lg:h-[100px] md:w-[70px] md:h-[70px] sm:w-[70px] sm:h-[70px]"
			/>
			<img
				src="../../../images/school-name.webp"
				alt="蓮ノ空女学院"
				width={227.5}
				height={89}
				className="w-[159.25px] h-[62.3px] m-2.5 no-click"
			/>
		</div>
	);
};

export default Header;
