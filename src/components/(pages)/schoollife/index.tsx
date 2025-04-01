import { IconBooks, IconSchool } from "@tabler/icons-react";
import type React from "react";
import type { AprilfoolPropsType } from "../../../types/types";

const Schoollife: React.FC<AprilfoolPropsType> = ({ setIsAMOpen, setType }) => {
	return (
		<div className="bg-white/95 p-6 rounded-lg">
			<div className="mb-6">
				<h3 className="text-lg font-bold text-blue-800 border-b-2 border-blue-700 pb-2 mb-4">
					学校生活
				</h3>
				<p className="text-sm mb-4">
					蓮ノ空女学院での充実した学校生活についてご紹介します。本校では、勉学だけでなく部活動や学校行事を通じて豊かな人間性を育みます。
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<button
					type="button"
					className="bg-pink-50 p-4 rounded border border-pink-200 hover:bg-pink-100 transition-colors cursor-pointer"
					onClick={() => {
						setIsAMOpen(true);
						setType("normal");
					}}
				>
					<div className="flex items-start">
						<div className="bg-pink-600 text-white rounded-full p-2 mr-3">
							<IconSchool />
						</div>
						<div className="flex items-start flex-col">
							<h4 className="font-bold text-pink-800">学生寮</h4>
							<p className="text-sm text-gray-700 mt-1 text-start">
								寮生活についての情報です。年間行事や食事、施設設備についてご紹介します。
							</p>
							<div className="text-pink-700 mt-2 text-sm font-medium">
								詳細を見る →
							</div>
						</div>
					</div>
				</button>

				<button
					type="button"
					className="bg-green-50 p-4 rounded border border-green-200 hover:bg-green-100 transition-colors cursor-pointer"
					onClick={() => {
						setIsAMOpen(true);
						setType("normal");
					}}
				>
					<div className="flex items-start">
						<div className="bg-green-600 text-white rounded-full p-2 mr-3">
							<IconBooks />
						</div>
						<div className="flex items-start flex-col">
							<h4 className="font-bold text-green-800">施設・設備</h4>
							<p className="text-sm text-gray-700 mt-1 text-start">
								充実した施設と設備を紹介します。図書館や体育館、IT設備など学習環境が整っています。
							</p>
							<div className="text-green-700 mt-2 text-sm font-medium">
								詳細を見る →
							</div>
						</div>
					</div>
				</button>
			</div>

			<div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
				<div className="bg-blue-700 text-white px-4 py-2">
					<h4 className="font-bold">年間行事</h4>
				</div>
				<div className="p-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="text-center">
							<div className="font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">
								1学期
							</div>
							<ul className="text-sm text-left">
								<li className="mb-1">・入学式</li>
								<li className="mb-1">・部活動説明会</li>
								<li className="mb-1">・体育祭</li>
								<li className="mb-1">・撫子祭</li>
								<li className="mb-1">・期末試験</li>
							</ul>
						</div>
						<div className="text-center">
							<div className="font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">
								2学期
							</div>
							<ul className="text-sm text-left">
								<li className="mb-1">・夏季休業</li>
								<li className="mb-1">・竜胆祭</li>
								<li className="mb-1">・オープンキャンパス</li>
								<li className="mb-1">・期末試験</li>
							</ul>
						</div>
						<div className="text-center">
							<div className="font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">
								3学期
							</div>
							<ul className="text-sm text-left">
								<li className="mb-1">・冬季休業</li>
								<li className="mb-1">・期末試験</li>
								<li className="mb-1">・卒業式</li>
								<li className="mb-1">・蓮華祭</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-blue-50 p-4 border border-blue-200 rounded">
				<h4 className="font-bold text-blue-800 mb-2">制服紹介</h4>
				<div className="flex flex-col md:flex-row gap-4">
					<div className="flex-1">
						<p className="text-sm mb-2">
							本校の制服は、伝統と機能性を兼ね備えたデザインです。生徒の声を取り入れ、季節に応じた着こなしができるよう工夫されています。
						</p>
						<ul className="text-sm list-disc list-inside">
							<li>夏服・冬服の2種類</li>
							<li>リボンは学年色</li>
						</ul>
					</div>
					<div className="flex-1 text-right">
						<button
							type="button"
							className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
							onClick={() => {
								setIsAMOpen(true);
								setType("normal");
							}}
						>
							制服の写真を見る
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Schoollife;
