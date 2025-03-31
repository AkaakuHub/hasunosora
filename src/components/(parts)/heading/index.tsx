import type { PropsWithChildren } from "react";

import "./index.css";

import React from "react";

type HeadingType = "h1" | "h2" | "h3";

type Props = PropsWithChildren<{
	as: HeadingType;
}>;

/**
 * 見出しを作成する
 * @example
 * import { Heading } from "@/components/heading";
 *
 * <Heading as="h1">大見出し</Heading>
 * <Heading as="h2">中見出し</Heading>
 * <Heading as="h3">小見出し</Heading>
 */
export function Heading({ as: Component, children }: Props) {
	return (
		<Component className={`${Component} base`}>
			<div className="heading-root">
				<img
					src="/lotus1.svg"
					alt="蓮のイラスト"
					width={1610 * 0.05}
					height={992 * 0.05}
					className="no-click"
				/>
				{children}
			</div>
		</Component>
	);
}
