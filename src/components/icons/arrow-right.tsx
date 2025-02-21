import * as React from "react";

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			fill="currentColor"
			d="M7.746 19.759a.811.811 0 0 1-.081-1.072l.08-.092L14.474 12 7.746 5.405a.811.811 0 0 1-.081-1.072l.08-.092a.852.852 0 0 1 1.094-.08l.094.08 7.321 7.177c.298.292.325.75.081 1.072l-.08.092-7.322 7.177a.851.851 0 0 1-1.187 0Z"
		/>
	</svg>
);

export { ArrowRight };
