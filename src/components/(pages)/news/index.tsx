import type React from "react";
import NewsItem from "../../(parts)/newsItem";
import { useYear } from "../../../hooks/useYear";
import type {
	AprilfoolPropsType,
	AprilfoolTypeType,
} from "../../../types/types";

const News: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	const { paramYear } = useYear();

	const handleModal = (type: AprilfoolTypeType) => {
		setIsAMOpen(true);
		setType(type);
	};
	return (
		<div className="space-y-1">
			{paramYear === "2024" && (
				<>
					<NewsItem
						date="2024年3月28日"
						category="重要"
						title="第二音楽堂の名称が決まりました"
						onClick={handleModal}
					/>
					<NewsItem
						date="2024年3月28日"
						category="行事"
						title="蓮華祭が開催されました"
						onClick={handleModal}
					/>
					<NewsItem
						date="2024年3月12日"
						category="その他"
						title="仮囲い撤去に伴う通行規制のお知らせ"
						onClick={handleModal}
					/>
				</>
			)}
			{paramYear === "2025" && (
				<>
					<NewsItem
						date="2025年3月30日"
						category="行事"
						title="蓮華祭が開催されました"
						onClick={handleModal}
					/>
					<NewsItem
						date="2025年1月26日"
						category="重要"
						title="スクールアイドルクラブがプレーオフで優勝しました！"
						onClick={handleModal}
					/>
					<NewsItem
						date="2025年1月10日"
						category="重要"
						title="ラブライブ！の決勝大会が行われました"
						onClick={handleModal}
					/>
				</>
			)}
		</div>
	);
};

export default News;
