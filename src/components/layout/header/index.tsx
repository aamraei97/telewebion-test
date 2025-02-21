import Image from "next/image";

import { HeaderNav } from "./header-nav";
export function Header() {
	return (
		<div className="h-12 flex items-center justify-between bg-[#10151AE5] border-b border-[#FFFFFF0D]">
			{/* right */}
			<div className="flex items-center gap-4">
				<Image
					src="/images/red-logo.png"
					alt="تلوبیون | مرجع پخش زنده و دانلود فیلم ، سریال و سایر برنامه های تلویزیون"
					width={48}
					height={48}
				/>
				<HeaderNav />
			</div>
		</div>
	);
}
