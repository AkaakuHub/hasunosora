import React, { useState, useEffect, useRef } from "react";
import ImageMapper from "react-image-mapper";
import "./index.css";

import { AprilfoolPropsType } from "../../../types";

const makeTweetContent = () => {
	const url = "https://hasunosora.vercel.app";
	const text = "蓮ノ空女学院 ホームページ";
	const hashtags = "蓮ノ空,エイプリルフール";
	return `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
};

const Sachi: React.FC<AprilfoolPropsType> = ({
	isAMOpen,
	setIsAMOpen,
	type,
	setType,
}) => {
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
		area: any,
		index: number,
		event: React.MouseEvent,
	) => {
		event.preventDefault();
		setIsAMOpen(true);
		setType("sachi");
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
		<div className="sachi-root" ref={containerRef}>
			<ImageMapper
				src="/background/7.webp"
				map={MAP}
				width={getWidth()}
				imgWidth={1920} // 元の画像の幅
				onClick={handleClickImage}
				responsive
				parentWidth={windowWidth}
				className="sachi-image"
			/>
		</div>
	);
};

export default Sachi;
