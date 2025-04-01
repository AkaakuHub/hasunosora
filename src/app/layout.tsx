import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Yuji_Syuku } from "next/font/google";
import type React from "react";

import "./global.css";

const yujiSyuku = Yuji_Syuku({
	subsets: ["latin"],
	display: "swap",
	weight: ["400"],
});

const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://localhost:3000";

export const metadata: Metadata = {
	title: "蓮ノ空女学院 ウェブサイト",
	description:
		"石川県金沢市にある、私立蓮ノ空女学院のウェブサイトです。非公式によるエイプリルフール企画です。",
	keywords: ["蓮ノ空女学院", "ラブライブ", "スクールアイドル", "金沢市"],
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "蓮ノ空女学院 ウェブサイト",
		description:
			"石川県金沢市にある、私立蓮ノ空女学院のウェブサイトです。非公式によるエイプリルフール企画です。",
		url: baseURL,
		siteName: "蓮ノ空女学院 ウェブサイト",
		images: [
			{
				url: `${baseURL}/ogp_default.webp`,
				width: 1200,
				height: 630,
				alt: "蓮ノ空女学院 ウェブサイト",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "蓮ノ空女学院 ウェブサイト",
		description:
			"石川県金沢市にある、私立蓮ノ空女学院のウェブサイトです。非公式によるエイプリルフール企画です。",
		images: [
			{
				url: `${baseURL}/ogp_default.webp`,
				width: 1200,
				height: 630,
				alt: "蓮ノ空女学院 ウェブサイト",
			},
		],
	},
	viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={yujiSyuku.className}>
			<head>
				<GoogleTagManager gtmId="xxx" />
			</head>
			<body>{children}</body>
		</html>
	);
}
