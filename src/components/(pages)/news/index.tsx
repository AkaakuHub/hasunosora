import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type React from "react";
import { Heading } from "../../(parts)/heading";
import type { AprilfoolPropsType } from "../../../types/types";

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
				className="border-2 border-groove border-[#838383] pl-12 md:pl-4 rounded-[1em] my-4 cursor-pointer hover:bg-[#c8c8c8] w-full text-left transition-colors"
				onClick={() => {
					setIsAMOpen(true);
					setType("normal");
				}}
			>
				<p>
					<span
						className="text-white p-2 rounded-[0.5em] w-[6em] inline-block text-center mr-12 md:mr-4 select-none"
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
		<div className="p-4 rounded-b-lg my-48 bg-gradient-to-t from-white via-white/80 to-transparent">
			<Heading as="h1">お知らせ</Heading>
			{newsData.map((news) => (
				<MakeNewsComponent key={news.title} news={news} />
			))}
			<button
				type="button"
				className="inline-block justify-center mt-4 cursor-pointer mb-8 hover:underline"
				onClick={() => setIsAMOpen(true)}
			>
				<span>もっと見る</span>
				<span className="relative top-[6px] left-[6px]">
					<ArrowForwardIcon />
				</span>
			</button>
		</div>
	);
};

export default News;
