import { useEffect, useState } from "react";

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const controller = new AbortController();

		const handleResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};
		window.addEventListener("resize", handleResize, { signal: controller.signal });

		return () => {
			controller.abort();
		};
	}, []);

	return windowSize;
}
