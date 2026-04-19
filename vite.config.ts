import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import componentTagger from "vite-plugin-component-tagger";


export default defineConfig(({ mode }) => {
  return {
    server: {
 
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      }, 
      proxy: {
    "/api": "http://localhost:3001"
  }

    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});