import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "grootConnect",
      remotes: {
        grootChat: "http://localhost:3001/assets/remoteEntry.js",
        grootMail: "http://localhost:3002/assets/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/components/Button.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});