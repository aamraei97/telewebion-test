import Link from "next/link";

type Props = {
  href: string;
  title: React.ReactNode;
};
export function Tag({ href, title }: Props) {
  return (
    <Link
      href={href}
      className="flex justify-center items-center text-xs text-white bg-[#FFFFFF33] min-h-[20px] rounded-sm px-1 whitespace-nowrap"
    >
      {title}
    </Link>
  );
}
