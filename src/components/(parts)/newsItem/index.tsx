import type React from "react";

const NewsItem: React.FC<{
	date: string;
	category: "重要" | "行事" | "入試" | "その他";
	title: string;
}> = ({ date, category, title }) => {
	const colorDictionary = {
		重要: "#b51909",
		行事: "#3f10ad",
		入試: "#3fad10",
		その他: "#525252",
	};
	return (
		<div className="py-2 border-b border-gray-200 last:border-b-0">
			<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
				<span className="text-sm text-gray-600 whitespace-nowrap">{date}</span>
				<span
					className={`text-xs text-white px-2 py-0.5 rounded whitespace-nowrap bg-[${colorDictionary[category]}]`}
				>
					{category}
				</span>
				<span className="font-medium">{title}</span>
			</div>
		</div>
	);
};

export default NewsItem;
