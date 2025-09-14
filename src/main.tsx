import { StrictMode as Strict } from "react";
import { createRoot as root } from "react-dom/client";

import { App } from "./App";

const root2 = window.document.getElementById("root")!;
root(root2).render(
	<Strict>
		<App />
	</Strict>,
);
