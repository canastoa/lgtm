import tailwind from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { UserConfig as Config } from "vite";

export default {
	plugins: [react(), tailwind()],
} satisfies Config;
