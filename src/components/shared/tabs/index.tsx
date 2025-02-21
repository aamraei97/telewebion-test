import { cn } from "@/lib/utils";
import { memo } from "react";

type Props = {
	tabs: { id: string; label: string }[];
	activeTab: string;
	onTabChange: (tabId: string) => void;
};
function TabsComponent({ tabs, activeTab, onTabChange }: Props) {
	return (
		<div className="flex border-b border-[#10151A]">
			{tabs.map((tab) => (
				<Tab
					key={tab.id}
					isActive={tab.id === activeTab}
					onClick={() => {
						onTabChange(tab.id);
					}}
				>
					{tab.label}
				</Tab>
			))}
		</div>
	);
}

type TabProps = {
	children: React.ReactNode;
	isActive: boolean;
	onClick: () => void;
};

export function Tab({ children, isActive, onClick }: TabProps) {
	return (
		<button
			className={cn(
				"relative flex items-center border-0 outline-none justify-center h-10 px-8",
				isActive && "border-b border-[#FD4141]"
			)}
			onClick={onClick}
		>
			{isActive && (
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#FD4141]/20 to-transparent" />
			)}
			{children}
		</button>
	);
}

export const Tabs = memo(TabsComponent);
