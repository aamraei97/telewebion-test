import Image from "next/image";

import { HeaderNav } from "./header-nav";
export function HeaderDesktop() {
	return (
		<div className="flex items-center gap-4">
			<Image
				src="/images/red-logo.png"
				alt="تلوبیون | مرجع پخش زنده و دانلود فیلم ، سریال و سایر برنامه های تلویزیون"
				width={48}
				height={48}
			/>
			<HeaderNav />
		</div>
	);
}
