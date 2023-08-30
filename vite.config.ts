import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src/"),
            "@utils": resolve(__dirname, "src/utils"),
            "@store": resolve(__dirname, "src/store"),
            "@router": resolve(__dirname, "src/router"),
            "@assets": resolve(__dirname, "src/assets"),
            "@components": resolve(__dirname, "src/components"),
            "@pages": resolve(__dirname, "src/pages"),
        },
    },
});
