import Link from "next/link";

import { headerNavLinks } from "./links";

export function HeaderNav() {
	return (
		<ul className="items-center gap-4 hidden lg:flex">
			{headerNavLinks.map((link) => (
				<li key={link.href} className="flex">
					<Link
						href={link.href}
						className="text-white text-sm font-medium h-12 flex items-center justify-center border-b border-transparent hover:border-b-white transition-all duration-300"
					>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	);
}
