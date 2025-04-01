import { useEffect, useState } from "react";
import type React from "react";

interface ConfirmProps {
	isOpen: boolean;
	onClose?: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({ isOpen, onClose }) => {
	const [isAnimating, setIsAnimating] = useState(false);

	// isOpenが変更されたときにアニメーション状態を更新
	useEffect(() => {
		if (isOpen) {
			setIsAnimating(true);
		}
	}, [isOpen]);

	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	// 表示されていない＆アニメーション中でもない場合は何も表示しない
	if (!isOpen && !isAnimating) return null;

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-[9999] transition-all duration-300 ${
				isOpen
					? "opacity-100 pointer-events-auto"
					: "opacity-0 pointer-events-none"
			}`}
			onTransitionEnd={() => {
				if (!isOpen) setIsAnimating(false);
			}}
		>
			<button
				type="button"
				className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
					isOpen ? "opacity-100" : "opacity-0"
				}`}
				onClick={handleClose}
			/>

			<div
				className={`relative w-full max-w-md mx-4 overflow-hidden bg-white rounded-3xl shadow-xl transform transition-all duration-300 ${
					isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
				}`}
			>
				<div className="py-4 text-center bg-gradient-to-r from-[#4facfe] to-[#a742ea]">
					<h1 className="text-xl font-medium text-white">お知らせ</h1>
				</div>

				<div className="flex flex-col items-center px-6 py-8 text-center">
					<p className="text-lg leading-relaxed mb-8 text-gray-800">
						どこかに大切な「思い出」が隠されています！
						<br />
						ぜひ見つけてみよう！
					</p>

					<button
						type="button"
						className="bg-gradient-to-r from-[#4facfe] to-[#a742ea] px-10 py-3 rounded-xl text-white font-medium shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
						onClick={handleClose}
					>
						確認
					</button>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
