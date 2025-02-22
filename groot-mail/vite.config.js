import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "grootMail",
      filename: "remoteEntry.js",
      exposes: {
        "./MailApp": "./src/App.jsx",
      },
      remotes: {
        grootConnect: "https://groot-connect.vercel.app//assets/remoteEntry.js", // Add grootConnect as a remote
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});