import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // Base path for the application for production builds
  base: process.env.NODE_ENV === "production" ? "/landing-page/" : "/",
  plugins: [react()],
});
