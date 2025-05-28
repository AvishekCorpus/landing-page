import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // Set the base path for the project in production only
  base: process.env.NODE_ENV === "production" ? "/landing-page/" : "/",
  plugins: [react()],
});
