import clsx from "clsx";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import type { AprilfoolPropsType } from "../../../types/types";
import "./index.css";

import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";

const Aprilfool: React.FC<AprilfoolPropsType> = ({
	isAMOpen,
	setIsAMOpen,
	type,
}) => {
	const menuRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsAMOpen(false);
		}
	};

	useEffect(() => {
		if (isAMOpen) {
			setIsVisible(true);
		} else {
			const timeoutId = setTimeout(() => setIsVisible(false), 500); // 0.5秒後に非表示にする
			return () => clearTimeout(timeoutId);
		}
	}, [isAMOpen]);

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
		if (type === "normal") {
			const url = "https://hasunosora.vercel.app";
			const text = "蓮ノ空女学院 ホームページ";
			const hashtags = "蓮ノ空,エイプリルフール";
			return `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
		}
		if (type === "sachi") {
			const url = "https://hasunosora.vercel.app";
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
			className={clsx(
				"modal-root",
				isAMOpen && "is-shown",
				isVisible && "is-visible",
			)}
		>
			<div className="modal-bg" />
			<div className="modal" ref={menuRef}>
				<button
					type="button"
					className="modal-close-button"
					onClick={() => setIsAMOpen(false)}
				>
					<CloseIcon fontSize="large" />
				</button>
				<div
					className={clsx("modal-main-text", type === "sachi" && "sachi-text")}
				>
					{message1}
					<br />
					<div className="modal-image-container">
						<img
							src={modalImageURL}
							alt={`${type}の画像`}
							className="modal-image no-click"
						/>
					</div>
					<br />
					<a
						href={makeTweetContent(type)}
						target="_blank"
						rel="noreferrer"
						className="share-button-wrapper"
					>
						<span
							className="share-button"
							style={{
								backgroundColor: isHovering ? "#1DA1F2" : "#000",
							}}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<span className="icon-wrapper">
								{isHovering ? <TwitterIcon /> : <XIcon />}
							</span>
							でシェア
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Aprilfool;
