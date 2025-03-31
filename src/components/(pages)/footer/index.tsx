import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

const Footer = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<p className="bg-school-pink mb-0 p-4 text-center z-[103] relative">
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
				<div className="fixed z-[1000] left-0 top-0 w-full h-full overflow-auto bg-black/40">
					<button
						type="button"
						className="fixed z-[1001] left-0 top-0 w-full h-full"
						onClick={toggleModal}
					/>
					<div className="relative bg-white mx-auto mt-[15%] p-5 border border-gray-200 w-4/5 max-w-[600px] rounded z-[1002]">
						<button
							type="button"
							className="absolute top-2.5 right-2.5 cursor-pointer"
							onClick={toggleModal}
						>
							<CloseIcon fontSize="large" />
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
							>
								Googleアナリティクス利用規約
							</a>
							や
							<a
								href="https://policies.google.com/technologies/ads?hl=ja"
								target="_blank"
								rel="noreferrer"
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
