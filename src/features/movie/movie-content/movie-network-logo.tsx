import Image from "next/image";

export function MovieNetworkLogo() {
	return (
		<div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none hidden lg:flex">
			<Image
				src="/images/network-logo.png"
				alt="movie network logo"
				fill
				className="object-contain object-left"
			/>
		</div>
	);
}
