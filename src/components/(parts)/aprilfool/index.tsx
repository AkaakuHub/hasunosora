import type React from "react";
import { useEffect, useRef, useState } from "react";

import type { AprilfoolPropsType } from "../../../types/types";

import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";

const Aprilfool: React.FC<AprilfoolPropsType> = ({
	isAMOpen,
	setIsAMOpen,
	type,
}) => {
	const menuRef = useRef<HTMLDivElement>(null);
	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsAMOpen(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const [isHovering, setIsHovering] = useState(false);
	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	const makeTweetContent = (type: string) => {
		const baseURL =
			process.env.NEXT_PUBLIC_BASE_URL ?? "https://localhost:3000";
		if (type === "normal") {
			const url = baseURL;
			const text = "蓮ノ空女学院 ホームページ";
			const hashtags = "蓮ノ空,エイプリルフール";
			return `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
		}
		if (type === "sachi") {
			const url = baseURL;
			const text = "大切な思い出を発見しました";
			const hashtags = "蓮ノ空,エイプリルフール";
			return `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
		}
		return "";
	};

	const message1Dict: { [key: string]: string } = {
		normal:
			"このサイトは、蓮ノ空のこと好き好きクラブのとある一員がエイプリルフールに作ったものであり、公式とは一切関係ありません。",
		sachi: `春は出会いと別れの季節、ってよく言うだろう?
あれは少し正確じゃないんだ。
順番が逆なんだよねぃ。別れがあって、出会いがある。
別れにはつらい気持ちになることもあるけど･･････
未来は意外と明るいんだってことを、憶えておいてほしいな。
    `,
	};

	const [message1, setMessage1] = useState<JSX.Element[]>([]);
	const [modalImageURL, setModalImageURL] = useState("/special/normal.webp");

	useEffect(() => {
		setMessage1(
			message1Dict[type].split("\n").map((line) => <p key={line}>{line}</p>),
		);

		if (type === "sachi") {
			setModalImageURL("/special/103withSachi.webp");
		} else {
			setModalImageURL("/special/normal.webp");
		}
	}, [type]);

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-[10000] transition-all duration-300 ${
				isAMOpen
					? "opacity-100 pointer-events-auto"
					: "opacity-0 pointer-events-none"
			}`}
		>
			<div
				className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
					isAMOpen ? "opacity-100" : "opacity-0"
				}`}
			/>

			<div
				className={`relative w-4/5 max-w-[800px] max-h-[80vh] bg-white rounded-lg p-8 overflow-auto shadow-lg transition-transform duration-300 ${
					isAMOpen ? "scale-100" : "scale-95"
				}`}
				ref={menuRef}
			>
				<button
					type="button"
					className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
					onClick={() => setIsAMOpen(false)}
				>
					<CloseIcon fontSize="large" />
				</button>
				<div className="text-start flex gap-8 flex-col">
					<span>{message1}</span>
					<div className="max-w-full max-h-[40vh] overflow-hidden">
						<img
							src={modalImageURL}
							alt={`${type}の画像`}
							className="max-w-full max-h-full object-contain pointer-events-none select-none"
						/>
					</div>
					<div className="mx-auto">
						<a
							href={makeTweetContent(type)}
							target="_blank"
							rel="noreferrer"
							className="text-center justify-center no-underline inline-block"
						>
							<button
								type="button"
								className="no-underline text-white text-center inline-flex items-center p-1.5 rounded-md leading-none text-2xl cursor-pointer"
								style={{
									backgroundColor: isHovering ? "#1DA1F2" : "#000",
								}}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<span className="align-middle">
									{isHovering ? <TwitterIcon /> : <XIcon />}
								</span>
								でシェア
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aprilfool;
