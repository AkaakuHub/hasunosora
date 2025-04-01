"use client";

import Link from "next/link";
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
	moreLink?: string;
};

const Section: React.FC<SectionProps> = ({ children, title, moreLink }) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	return (
		<div
			className="bg-white/95 rounded shadow-sm overflow-hidden"
			ref={sectionRef}
		>
			{title && (
				<div className="bg-blue-700 text-white px-4 py-2 flex justify-between items-center">
					<h2 className="text-lg font-bold flex items-center">
						{title}
						<img
							src="/lotus1.svg"
							alt="蓮のイラスト"
							width={1610 * 0.018}
							height={992 * 0.018}
							className="ml-2 pointer-events-none select-none"
						/>
					</h2>
					{moreLink && (
						<Link
							href={moreLink}
							className="text-white text-sm hover:underline"
						>
							一覧へ
						</Link>
					)}
				</div>
			)}
			<div className="p-4">{children}</div>
		</div>
	);
};

const QuickLink: React.FC<{ title: string; icon?: string }> = ({
	title,
	icon,
}) => {
	return (
		<div className="bg-white/90 border border-gray-200 rounded shadow-sm hover:bg-blue-50 transition-colors">
			<Link href="#" className="flex items-center p-3 text-blue-800">
				{icon && <img src={icon} alt="" className="w-5 h-5 mr-2" />}
				<span className="font-medium">{title}</span>
			</Link>
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

			<header className="sticky top-0 z-50 w-full bg-school-pink border-b border-gray-200 shadow-sm">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between py-4">
						<div className="flex items-center">
							<img src="/lotus1.svg" alt="校章" className="w-10 h-10 mr-3" />
							<div>
								<h1 className="text-xl font-bold text-blue-800">
									蓮ノ空女学院
								</h1>
								<p className="text-xs text-gray-600">
									Dream believers, you believe.
								</p>
							</div>
						</div>
						<div className="hidden md:block">
							<Header />
						</div>
					</div>
				</div>
			</header>

			<div className="container mx-auto px-4 relative z-10 mb-40">
				<About />

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
					<div className="order-2 lg:order-1 lg:col-span-1 flex gap-6 flex-col">
						<div className="bg-blue-700 text-white px-4 py-2 mb-4 rounded-t shadow-sm">
							<h2 className="text-lg font-bold">メニュー</h2>
						</div>

						<div className="space-y-2">
							<QuickLink title="学校紹介" icon="/lotus1.svg" />
							<QuickLink title="入試情報" icon="/lotus1.svg" />
							<QuickLink title="学校生活" icon="/lotus1.svg" />
							<QuickLink title="部活動" icon="/lotus1.svg" />
							<QuickLink title="進路指導" icon="/lotus1.svg" />
							<QuickLink title="アクセス" icon="/lotus1.svg" />
						</div>

						<div className="bg-white/95 rounded shadow-sm">
							<div className="bg-blue-700 text-white px-4 py-2">
								<h2 className="text-lg font-bold">学校カレンダー</h2>
							</div>
							<div className="p-4">
								<div className="text-sm space-y-3">
									<p className="flex justify-between border-b border-gray-200 pb-2">
										<span className="font-medium">4月7日(水)</span>
										<span>新学期始業式</span>
									</p>
									<p className="flex justify-between border-b border-gray-200 pb-2">
										<span className="font-medium">4月8日(木)</span>
										<span>入学式</span>
									</p>
									<p className="flex justify-between border-b border-gray-200 pb-2">
										<span className="font-medium">4月15日(木)</span>
										<span>健康診断</span>
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white/95 rounded shadow-sm">
							<div className="bg-blue-700 text-white px-4 py-2">
								<h2 className="text-lg font-bold">アクセス</h2>
							</div>
							<div className="p-4">
								<p className="text-sm mb-2">〒000-0000</p>
								<p className="text-sm mb-4">○○県△△市□□町1-1</p>
								<p className="text-sm">TEL: 000-000-0000</p>
							</div>
						</div>
					</div>

					<div className="order-1 lg:order-2 lg:col-span-3 flex flex-col gap-6">
						<Section title="部活動・生徒会ニュース" moreLink="#">
							<News {...AprilfoolProps} />
						</Section>

						<Section title="学校生活">
							<Schoollife {...AprilfoolProps} />
						</Section>

						<Section title="入試情報">
							<Exam {...AprilfoolProps} />
						</Section>
					</div>
				</div>
			</div>

			<div
				className={`opacity-0 transition-opacity duration-500 ease-in-out z-0 ${isLastImage ? "opacity-100" : ""}`}
			>
				<Sachi {...AprilfoolProps} />
			</div>

			<Footer />
		</div>
	);
}
