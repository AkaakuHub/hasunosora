import { IconBook, IconFileDescription } from "@tabler/icons-react";
import type React from "react";
import type { AprilfoolPropsType } from "../../../types/types";

const Exam: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	return (
		<div className="bg-white/95 p-6 rounded-lg">
			<div className="mb-6">
				<p className="text-sm mb-4">
					令和6年度の入学試験に関する情報を掲載しています。出願期間や試験日程をご確認ください。
				</p>

				<div className="overflow-x-auto">
					<table className="w-full border-collapse mb-4">
						<thead>
							<tr className="bg-blue-100">
								<th className="border border-gray-300 p-2 text-left min-w-24">
									入試区分
								</th>
								<th className="border border-gray-300 p-2 text-left min-w-24">
									出願期間
								</th>
								<th className="border border-gray-300 p-2 text-left min-w-24">
									試験日
								</th>
								<th className="border border-gray-300 p-2 text-left min-w-24">
									合格発表
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border border-gray-300 p-2 min-w-24">
									推薦入試
								</td>
								<td className="border border-gray-300 p-2 min-w-24">未定</td>
								<td className="border border-gray-300 p-2 min-w-24">未定</td>
								<td className="border border-gray-300 p-2 min-w-24">未定</td>
							</tr>
							<tr className="bg-gray-50">
								<td className="border border-gray-300 p-2 min-w-24">
									一般入試
								</td>
								<td className="border border-gray-300 p-2 min-w-24">未定</td>
								<td className="border border-gray-300 p-2 min-w-24">未定</td>
								<td className="border border-gray-300 p-2 min-w-24">未定</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<button
					type="button"
					className="bg-blue-50 p-4 rounded border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
					onClick={() => {
						setIsAMOpen(true);
						setType("normal");
					}}
				>
					<div className="flex items-start">
						<div className="bg-school-blue text-white rounded-full p-2 mr-3">
							<IconBook />
						</div>
						<div className="flex items-start flex-col">
							<h4 className="font-bold text-school-blue">過去問題</h4>
							<p className="text-sm text-gray-700 mt-1 text-start">
								過年度の入学試験問題と解答例を掲載しています。
							</p>
							<div className="text-school-blue mt-2 text-sm font-medium">
								詳細を見る →
							</div>
						</div>
					</div>
				</button>

				<button
					type="button"
					className="bg-blue-50 p-4 rounded border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
					onClick={() => {
						setIsAMOpen(true);
						setType("normal");
					}}
				>
					<div className="flex items-start">
						<div className="bg-school-blue text-white rounded-full p-2 mr-3">
							<IconFileDescription />
						</div>
						<div className="flex items-start flex-col">
							<h4 className="font-bold text-school-blue">出願書類</h4>
							<p className="text-sm text-gray-700 mt-1 text-start">
								入学願書の記入例や必要書類の一覧をご確認いただけます。
							</p>
							<div className="text-school-blue mt-2 text-sm font-medium">
								詳細を見る →
							</div>
						</div>
					</div>
				</button>
			</div>

			<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
				<h4 className="font-bold text-yellow-800 mb-2">
					入試に関するお問い合わせ
				</h4>
				<p className="text-sm">
					入試に関するご質問は、入試広報部までお問い合わせください。
				</p>
			</div>
		</div>
	);
};

export default Exam;
