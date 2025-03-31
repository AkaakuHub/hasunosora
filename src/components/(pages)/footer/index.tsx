import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import "./index.css";

const Footer = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<p className="footer-root">
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
					className="footer-privacy-policy"
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
				<div className="footer-modal-container">
					<div className="footer-modal">
						<button
							type="button"
							className="footer-modal-bg"
							onClick={toggleModal}
						/>
						<div className="footer-modal-content">
							<button
								type="button"
								className="footer-modal-close-button"
								onClick={toggleModal}
							>
								<CloseIcon fontSize="large" />
							</button>
							<p className="footer-modal-main-text">
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
				</div>
			)}
		</>
	);
};

export default Footer;
