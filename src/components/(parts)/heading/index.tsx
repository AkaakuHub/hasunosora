import type { PropsWithChildren } from "react";
import React from "react";

type HeadingType = "h1" | "h2" | "h3";

type Props = PropsWithChildren<{
	as: HeadingType;
}>;

/**
 * 見出しを作成する
 */
export function Heading({ as: Component, children }: Props) {
	return (
		<Component
			className={`mb-4 ${Component === "h1" ? "text-[1.75em]" : "text-[1.5em]"}`}
		>
			<div className="flex items-center justify-center">
				<img
					src="/lotus1.svg"
					alt="蓮のイラスト"
					width={1610 * 0.05}
					height={992 * 0.05}
					className="pointer-events-none select-none"
				/>
				<div
					className={`
                    relative w-fit pb-2 mx-auto mb-4 text-center mt-5 top-5
                    ${
											Component === "h1"
												? 'before:absolute before:top-0 before:left-1/2 before:inline-block before:w-full before:h-5 before:border-b before:border-solid before:content-[""] before:-translate-x-1/2'
												: 'before:absolute before:top-0 before:left-1/2 before:inline-block before:w-full before:h-5 before:border-b before:border-double before:content-[""] before:-translate-x-1/2'
										}
                `}
				>
					{children}
				</div>
			</div>
		</Component>
	);
}
