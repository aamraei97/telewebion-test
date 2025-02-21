import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default: "bg-[#FD4141] text-white hover:bg-primary/90",
				outline: "border border-input hover:bg-accent hover:text-accent-foreground",
			},
			size: {
				default: "h-10 px-4",
				md: "h-12 px-4 text-base",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

interface ButtonProps extends React.ComponentPropsWithoutRef<"button">, VariantProps<typeof buttonVariants> {
	icon?: React.ReactNode;
	iconOnly?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, icon, children, iconOnly, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }), iconOnly && "p-0 aspect-square")}
				ref={ref}
				type="button"
				{...props}
			>
				{icon}
				{children}
			</button>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
