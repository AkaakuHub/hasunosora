import type React from "react";
import { useState, useEffect, useRef } from "react";
import "./index.css";

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
		<div className="lotusmenu-root">
			<button
				type="button"
				className="lotus-menu-launcher"
				onClick={() => setIsOpen((c) => !c)}
			/>
			{isOpen && (
				<div className="lotus-menu-wrapper">
					<div className="lotus-modal-bg" />
					{/** lotus-modalの外またはがクリックされると閉じる!? */}
					<div className="lotus-modal" ref={menuRef}>
						<div className="petal-0">X</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default LotusMenu;
