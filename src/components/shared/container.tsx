import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};
export function Container({ children, className = "" }: Props) {
	return <div className={cn("max-w-[1440px] w-full mx-auto px-4", className)}>{children}</div>;
}
