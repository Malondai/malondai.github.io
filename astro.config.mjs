// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://malondai.github.io', 
    base: '/portofolio', // Sesuaikan jika ini adalah sub-folder (repository name)
    vite: {
        plugins: [tailwindcss()],
    },
});
