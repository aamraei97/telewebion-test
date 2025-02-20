import Image from "next/image";

export function MovieLogo({
  logoPath,
  persianTitle,
}: {
  logoPath: string;
  persianTitle: string;
}) {
  return (
    <div className="relative max-h-[155px] h-[155px] w-full">
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
