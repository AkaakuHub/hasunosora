"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import Footer from "../components/(pages)/footer";
import Header from "../components/(pages)/header";

import About from "../components/(pages)/about";
import Exam from "../components/(pages)/exam";
import News from "../components/(pages)/news";
import Schoollife from "../components/(pages)/schoollife";

import Aprilfool from "../components/(parts)/aprilfool";
import Sachi from "../components/(parts)/sachi";

import type { AprilfoolTypeType } from "../types/types";

import { createGlobalStyle } from "styled-components";

const backgroundImages = [
	"/background/1.webp",
	"/background/2.webp",
	"/background/6.webp",
	"", // 最後の空文字列は、最後のセクションが背景画像を持たない場合に対応
];

const BackgroundImageComponent: React.FC<{
	setIsLastImage: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsLastImage }) => {
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			const windowHeight = window.innerHeight;
			const documentHeight =
				document.documentElement.scrollHeight - windowHeight;
			const scrollPercentage = scrollPosition / documentHeight;

			let newIndex = Math.floor(scrollPercentage * backgroundImages.length);
			if (newIndex === -1) {
				newIndex = 0;
			}
			setActiveImageIndex(newIndex);

			// 3, 4のときはisLastImageをtrueにする
			if (newIndex >= 3) {
				setIsLastImage(true);
			} else {
				setIsLastImage(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [setIsLastImage]);

	return (
		<div className="fixed top-0 left-0 w-full h-full -z-10">
			{backgroundImages.map((imgURL, index) => {
				if (imgURL === "") {
					return null;
				}
				return (
					<img
						key={imgURL}
						src={imgURL}
						className={`absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out ${index === activeImageIndex ? "opacity-100" : ""}`}
						style={{ zIndex: index === activeImageIndex ? 1 : 0 }}
						alt="background"
					/>
				);
			})}
		</div>
	);
};

type SectionProps = {
	children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const sectionRect = sectionRef.current?.getBoundingClientRect();
			if (!sectionRect) return;

			// const isInViewport =
			//   sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight;

			// Viewport内の場合、何かの処理を行う
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="section-root" ref={sectionRef}>
			{children}
		</div>
	);
};

export default function Home() {
	const [isAMOpen, setIsAMOpen] = useState(false);
	const [type, setType] = useState<AprilfoolTypeType>("normal");

	const AprilfoolProps = { isAMOpen, setIsAMOpen, type, setType };

	const [isLastImage, setIsLastImage] = useState(false);

	const getRandomColor = () => {
		const colors = [
			"#FFBF00",
			"#1053A6",
			"#69CD82",
			"#E7334A",
			"#F79293",
			"#A6A6A6",
		];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const GlobalStyles = createGlobalStyle`
    ::selection {
      color: #fff;
      background: ${getRandomColor()};
    }
  `;

	return (
		<>
			<GlobalStyles />
			<BackgroundImageComponent setIsLastImage={setIsLastImage} />
			<Aprilfool {...AprilfoolProps} />
			<Header />

			<div className="mx-auto my-4 w-[90%] max-w-[1000px]">
				<Section>
					<About />
				</Section>
				<Section>
					<News {...AprilfoolProps} />
				</Section>
				<Section>
					<Schoollife {...AprilfoolProps} />
				</Section>
				<Section>
					<Exam {...AprilfoolProps} />
				</Section>
			</div>

			<div
				className={`opacity-0 transition-opacity duration-500 ease-in-out z-0 ${isLastImage ? "opacity-100" : ""}`}
			>
				<Sachi {...AprilfoolProps} />
			</div>

			<Footer />
		</>
	);
}
