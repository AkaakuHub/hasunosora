import { IconX } from "@tabler/icons-react";
import React, { useState } from "react";

const Footer = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<p className="bg-school-pink mb-0 p-4 text-center z-[50] relative">
				問題がある場合の連絡は
				<a
					href="https://twitter.com/AkaakuHub"
					target="_blank"
					rel="noreferrer"
				>
					こちら
				</a>
				<br />
				このサイトは4月1日に作られたものであり、公式とは一切関係ありません。
				<br />
				<br />
				<button
					type="button"
					className="border-none rounded hover:underline cursor-pointer inline-block"
					onClick={toggleModal}
				>
					プライバシーポリシー
				</button>
				<br />
				<br />
				本サイトで使用されている画像の著作権は以下に帰属します。
				<br />
				©PL!HS ©S ©2023 BNML ©ODD No.
			</p>
			{showModal && (
				<div
					className={`fixed inset-0 z-[1000] flex items-center justify-center transition-all duration-300 ${
						showModal
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					}`}
				>
					<button
						type="button"
						className="absolute inset-0 bg-black/40 transition-opacity duration-300"
						onClick={toggleModal}
					/>
					<div className="relative bg-white mx-auto p-5 border border-gray-200 w-4/5 max-w-[600px] rounded-lg shadow-lg transition-transform duration-300 scale-100">
						<button
							type="button"
							className="absolute top-2.5 right-2.5 p-1 rounded-full hover:bg-gray-100 cursor-pointer"
							onClick={toggleModal}
						>
							<IconX />
						</button>
						<p className="leading-relaxed mt-8 p-4">
							本サイトでは、ユーザー体験の向上やサイトの最適化のため、Googleアナリティクスを使用しています。
							<br />
							Googleアナリティクスでは、Cookieを使用して、個人を特定できない形で匿名データを収集しています。
							<br />
							もしデータ収集を拒否したい場合は、お使いのブラウザの設定を変更してください。
							<br />
							<br />
							詳しくは、
							<a
								href="https://marketingplatform.google.com/about/analytics/terms/jp/"
								target="_blank"
								rel="noreferrer"
								className="text-blue-600 hover:underline"
							>
								Googleアナリティクス利用規約
							</a>
							や
							<a
								href="https://policies.google.com/technologies/ads?hl=ja"
								target="_blank"
								rel="noreferrer"
								className="text-blue-600 hover:underline"
							>
								Googleのポリシーと規約
							</a>
							をご確認ください。
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Footer;
