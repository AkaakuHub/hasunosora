import type React from "react";
import { useEffect, useRef, useState } from "react";

import type { AprilfoolPropsType } from "../../../types/types";

import { IconBrandTwitter, IconBrandX, IconX } from "@tabler/icons-react";
import { useYear } from "../../../hooks/useYear";

const Aprilfool: React.FC<AprilfoolPropsType> = ({
	isAMOpen,
	setIsAMOpen,
	type,
}) => {
	const { paramYear } = useYear();

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
		if (type === "special") {
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
		special: "",
	};

	if (paramYear === "2024") {
		message1Dict.special = `
春は出会いと別れの季節、ってよく言うだろう?
あれは少し正確じゃないんだ。
順番が逆なんだよねぃ。別れがあって、出会いがある。
別れにはつらい気持ちになることもあるけど･･････
未来は意外と明るいんだってことを、憶えておいてほしいな。`;
	}
	if (paramYear === "2025") {
		message1Dict.special = `
私たち...ラブライブ、優勝できました...！
いや～私たち、やっちゃったね！
うん、やったね。
`;
	}

	const [message1, setMessage1] = useState<JSX.Element[]>([]);
	const [modalImageURL, setModalImageURL] = useState(
		`/special/${paramYear}/normal.webp`,
	);

	useEffect(() => {
		setMessage1(
			message1Dict[type].split("\n").map((line, index) => (
				<p
					key={`${line}-${
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						index
					}`}
				>
					{line}
				</p>
			)),
		);

		if (type === "special") {
			setModalImageURL(`/special/${paramYear}/special.webp`);
		} else {
			setModalImageURL(`/special/${paramYear}/normal.webp`);
		}
	}, [type, paramYear]);

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
					<IconX />
				</button>
				<div className="text-start flex gap-8 flex-col mt-6">
					<span>{message1}</span>
					<div className="max-w-full max-h-[40vh] overflow-hidden flex items-center justify-center">
						<img
							src={modalImageURL}
							alt={`${type}の画像`}
							className="max-w-full max-h-[40vh] object-contain pointer-events-none select-none"
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
									{isHovering ? <IconBrandTwitter /> : <IconBrandX />}
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
