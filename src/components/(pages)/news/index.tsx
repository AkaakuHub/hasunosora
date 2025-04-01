import type React from "react";
import NewsItem from "../../(parts)/newsItem";
import type { AprilfoolPropsType } from "../../../types/types";

const News: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	return (
		<div className="space-y-1">
			<NewsItem
				date="2025年3月28日"
				category="重要"
				title="第二音楽堂の名称が決まりました"
			/>
			<NewsItem
				date="2025年3月28日"
				category="行事"
				title="蓮華祭が開催されました"
			/>
			<NewsItem
				date="2025年3月12日"
				category="その他"
				title="仮囲い撤去に伴う通行規制のお知らせ"
			/>
		</div>
	);
};

export default News;
