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
	"",
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
	title?: string;
};

const Section: React.FC<SectionProps> = ({ children, title }) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const sectionRect = sectionRef.current?.getBoundingClientRect();
			if (!sectionRect) return;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="section-root mb-12" ref={sectionRef}>
			{title && (
				<div className="border-l-4 border-blue-700 pl-3 mb-4 flex items-center">
					<h2 className="text-xl font-bold text-blue-800">{title}</h2>
					<img
					src="/lotus1.svg"
					alt="蓮のイラスト"
					width={1610 * 0.024}
					height={992 * 0.024}
					className="pointer-events-none select-none"
				/>
				</div>
			)}
			<div className="rounded-lg shadow-md p-6 border border-gray-200">
				{children}
			</div>
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
		<div className="min-h-screen">
			<GlobalStyles />
			<BackgroundImageComponent setIsLastImage={setIsLastImage} />
			<Aprilfool {...AprilfoolProps} />

			<div className="sticky top-0 z-50 w-full">
				<Header />
			</div>

			<main className="container mx-auto px-4 py-8 relative z-10">
				<div className="bg-white/80 rounded-lg shadow-lg p-6 mb-8">
					<h1 className="text-2xl font-bold text-center text-blue-900 mb-2">
						蓮ノ空女学院
					</h1>
					<p className="text-center text-gray-700">
						～未来へ羽ばたく若人たちの学び舎～
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-12">
					<div className="md:col-span-8">
						<Section title="学校紹介">
							<About />
						</Section>

						<Section title="お知らせ">
							<News {...AprilfoolProps} />
						</Section>

						<Section title="学校生活">
							<Schoollife {...AprilfoolProps} />
						</Section>

						<Section title="入試情報">
							<Exam {...AprilfoolProps} />
						</Section>
					</div>

					<div className="md:col-span-4">
						<div className="bg-white/90 rounded-lg shadow-md p-4 mb-6 border border-gray-200">
							<h3 className="text-lg font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-4">
								学校カレンダー
							</h3>
							<div className="text-sm space-y-2">
								<p className="flex justify-between">
									<span className="font-medium">4月7日(水)</span>
									<span>新学期始業式</span>
								</p>
								<p className="flex justify-between">
									<span className="font-medium">4月8日(木)</span>
									<span>入学式</span>
								</p>
								<p className="flex justify-between">
									<span className="font-medium">4月15日(木)</span>
									<span>健康診断</span>
								</p>
							</div>
						</div>

						<div className="bg-white/90 rounded-lg shadow-md p-4 mb-6 border border-gray-200">
							<h3 className="text-lg font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-4">
								アクセス
							</h3>
							<p className="text-sm mb-2">〒000-0000</p>
							<p className="text-sm mb-4">○○県△△市□□町1-1</p>
							<p className="text-sm">TEL: 000-000-0000</p>
						</div>
					</div>
				</div>
			</main>

			<div
				className={`opacity-0 transition-opacity duration-500 ease-in-out z-0 ${isLastImage ? "opacity-100" : ""}`}
			>
				<Sachi {...AprilfoolProps} />
			</div>

			<Footer />
		</div>
	);
}
