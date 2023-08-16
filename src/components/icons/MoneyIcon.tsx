import * as React from "react";
import { SVGProps } from "react";
const MoneyIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="10 0 5 20" width="4em" height="4em" {...props}>
		<path
			fill="#196C35"
			d="M3 6h18v12H3V6m9 3a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3M7 8a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2H7Z"
		/>
	</svg>
);
export default MoneyIcon;
