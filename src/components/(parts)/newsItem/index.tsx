import type React from "react";
import type { AprilfoolTypeType } from "../../../types/types";

const NewsItem: React.FC<{
	date: string;
	category: "重要" | "行事" | "入試" | "その他";
	title: string;
	onClick: (type: AprilfoolTypeType) => void;
}> = ({ date, category, title, onClick }) => {
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
					className="text-sm text-white px-2 py-0.5 rounded whitespace-nowrap w-16 text-center"
					style={{
						backgroundColor: colorDictionary[category],
					}}
				>
					{category}
				</span>
				<button
					type="button"
					className="font-medium text-blue-600 hover:underline text-start"
					onClick={() => onClick("normal" as AprilfoolTypeType)}
				>
					{title}
				</button>
			</div>
		</div>
	);
};

export default NewsItem;
