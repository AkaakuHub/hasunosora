import type React from "react";
import { useEffect, useRef, useState } from "react";
import ImageMapper from "react-image-mapper";

import { useYear } from "../../../hooks/useYear";
import type { AprilfoolPropsType } from "../../../types/types";

const Sachi: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	const { paramYear } = useYear();

	const [windowWidth, setWindowWidth] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateDimensions = () => {
			setWindowWidth(window.innerWidth);
		};

		updateDimensions();
		window.addEventListener("resize", updateDimensions);

		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);

	const handleClickImage = (
		area: {
			name: string;
			shape: string;
			coords: number[];
			preFillColor: string;
			fillColor: string;
		},
		index: number,
		event: React.MouseEvent,
	) => {
		event.preventDefault();
		setIsAMOpen(true);
		setType("special");
	};

	const MAP = {
		name: "ImageMap",
		areas: [
			{
				name: "ぼやけた写真",
				shape: "poly",
				coords: [888, 805, 881, 858, 980, 859, 973, 803],
				preFillColor: "transparent",
				fillColor: "rgba(255, 255, 255, 0)",
			},
		],
	};

	// 親コンテナの幅に応じて画像をリサイズするための幅を計算
	const getWidth = () => {
		return containerRef.current?.clientWidth ?? 1920;
	};

	return (
		<div
			className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center overflow-hidden"
			ref={containerRef}
		>
			<ImageMapper
				src={`/special/${paramYear}/background.webp`}
				map={MAP}
				width={getWidth()}
				imgWidth={1920}
				onClick={handleClickImage}
				responsive
				parentWidth={windowWidth}
				className="relative z-0"
			/>
		</div>
	);
};

export default Sachi;
