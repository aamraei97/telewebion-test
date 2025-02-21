import Image from "next/image";

type Props = {
	coverPath: string;
	duration: string;
	persianTitle: string;
};
export function MovieCardHeader({ coverPath, duration, persianTitle }: Props) {
	return (
		<div className="relative w-full h-full aspect-[5/3] rounded-sm border border-[#FFFFFF1A] overflow-hidden">
			<Image src={coverPath} alt={persianTitle} fill className="object-cover" />
			<div className="absolute bottom-1 left-1">
				<div className="relative px-1.5 grid">
					<span className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-[#10151AE5] h-5 rounded-sm" />
					<span className="text-[#CBD2D9] text-xs relative"> {duration}</span>
				</div>
			</div>
		</div>
	);
}
