import Link from "next/link";

import { ArrowRight } from "@/components/icons/arrow-right";
import { ProfileIcon } from "@/components/icons/profile";

export function HeaderMobile() {
	return (
		<>
			<div className="flex h-full">
				<Link href="/" className="text-white text-sm font-medium h-full flex items-center justify-center">
					<ArrowRight />
				</Link>
			</div>
			<span>لوگو درست اکسترکت نمیشه</span>

			<ProfileIcon />
		</>
	);
}
