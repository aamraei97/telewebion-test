import Image from "next/image";

export function MovieCover({ movieCoverPath }: { movieCoverPath: string }) {
	return (
		<div className="relative lg:absolute top-0 left-0 w-full h-full z-0">
			<Image
				src={movieCoverPath}
				alt="movie cover"
				width={1440}
				height={586}
				className="object-cover w-full h-full object-top"
				quality={100}
			/>
			{/* bottom gradient */}
			<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black from-5% via-black/50 to-transparent z-10" />

			{/* right gradient */}
			<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black from-25% via-black/75 to-transparent z-10 hidden lg:block" />
		</div>
	);
}
