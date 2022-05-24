import { defineConfig } from "vite";
import { qrcode } from "vite-plugin-qrcode";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin(), qrcode()],
  build: {
    target: ["esnext"],
    polyfillDynamicImport: false,
  },
});
