import type React from "react";

import "./index.css";

import { Heading } from "../../(parts)/heading";

import type { AprilfoolPropsType } from "../../../types/types";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const News: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	type NewsDataType = {
		date: string;
		title: string;
		kind: "重要" | "行事" | "入試" | "その他";
	};

	const newsData: NewsDataType[] = [
		{
			date: "2024/3/28",
			title: "第二音楽堂の名称が決まりました",
			kind: "重要",
		},
		{
			date: "2024/3/28",
			title: "蓮華祭が開催されました",
			kind: "行事",
		},
		{
			date: "2024/3/12",
			title: "仮囲い撤去に伴う通行規制のお知らせ",
			kind: "その他",
		},
	];

	const colorDictionary = {
		重要: "#b51909",
		行事: "#3f10ad",
		入試: "#3fad10",
		その他: "#525252",
	};

	const MakeNewsComponent = ({ news }: { news: NewsDataType }) => {
		return (
			<button
				type="button"
				className="news-card"
				onClick={() => {
					setIsAMOpen(true);
					setType("normal");
				}}
			>
				<p>
					<span
						className="news-tag"
						style={{ backgroundColor: colorDictionary[news.kind] }}
					>
						{news.kind}
					</span>
					<span>{news.date}</span>
				</p>
				<p>{news.title}</p>
			</button>
		);
	};

	return (
		<div className="white-background-root">
			<Heading as="h1">お知らせ</Heading>
			{newsData.map((news) => (
				<MakeNewsComponent key={news.title} news={news} />
			))}
			<button
				type="button"
				className="show-more-wrapper"
				onClick={() => setIsAMOpen(true)}
			>
				<span>もっと見る</span>
				<span className="news-arrow">
					<ArrowForwardIcon />
				</span>
			</button>
		</div>
	);
};

export default News;
