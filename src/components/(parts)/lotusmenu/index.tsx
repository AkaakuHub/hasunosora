import type React from "react";
import { useEffect, useRef, useState } from "react";

const LotusMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="z-0">
			<button
				type="button"
				className="fixed top-[10px] right-[10px] cursor-pointer z-[1000] w-[70px] h-[70px] before:absolute before:w-full before:h-full before:content-[''] before:bg-[rgb(171,21,13)] before:rounded-full"
				onClick={() => setIsOpen((c) => !c)}
			/>
			{isOpen && (
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-[1000]">
					<div className="w-full h-full fixed top-0 left-0 opacity-50 bg-black z-[1000]" />
					<div
						className="fixed z-[1001] text-5xl bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						ref={menuRef}
					>
						<div className="w-[100px] h-[100px] bg-pink-300 rounded-full transition-transform duration-300 ease-in-out hover:scale-110">
							X
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default LotusMenu;
