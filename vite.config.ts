import react from "@vitejs/plugin-react";
import type { UserConfig as Config } from "vite";

export default {
	plugins: [react()],
} satisfies Config;
