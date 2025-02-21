"use client";

import { useWindowSize } from "@/hooks/use-window-size";
import dynamic from "next/dynamic";

const HeaderDesktop = dynamic(() => import("./header-desktop").then((mod) => mod.HeaderDesktop));
const HeaderMobile = dynamic(() => import("./header-mobile").then((mod) => mod.HeaderMobile));
export function Header() {
	const { windowSize } = useWindowSize();

	// prevent unnecessary components to load
	let content = null;
	if (windowSize) {
		if (windowSize.width > 1024) {
			content = <HeaderDesktop />;
		} else {
			content = <HeaderMobile />;
		}
	}

	return (
		<div className="h-12 flex items-center justify-between bg-black lg:bg-[#10151AE5] border-b border-[#FFFFFF0D] px-4 lg:pr-0 lg:pl-5">
			{content}
		</div>
	);
}
