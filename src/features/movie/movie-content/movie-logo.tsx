import Image from "next/image";

type Props = {
	logoPath: string;
	persianTitle: string;
};
export function MovieLogo({ logoPath, persianTitle }: Props) {
	return (
		<div className="relative max-h-[155px] h-[155px] w-full hidden md:block">
			<Image
				src={logoPath}
				alt={persianTitle}
				title={persianTitle}
				fill
				className="object-contain object-right"
			/>
		</div>
	);
}
