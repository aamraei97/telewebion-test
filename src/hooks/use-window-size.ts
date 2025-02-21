import { useEffect, useState } from "react";

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		const handleResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};
		handleResize();
		window.addEventListener("resize", handleResize, { signal: controller.signal });

		return () => {
			controller.abort();
		};
	}, []);

	return { windowSize };
}
