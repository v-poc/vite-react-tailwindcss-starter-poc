import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  fmt: {},
  lint: {"options":{"typeAware":true,"typeCheck":true}},
  plugins: [react()],
});
