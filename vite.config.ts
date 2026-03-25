import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// const PORT = process.env.VITE_PORT || 5173;
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     babel({ presets: [reactCompilerPreset()] })
//   ],
//   server: {
//     port: Number(PORT),
//   }
// })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const PORT = Number(env.VITE_PORT);
  const API_BASE_URL = env.VITE_API_BASE_URL;

  // https://vite.dev/config/
  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    server: {
      port: PORT,
      proxy: {
        "/Api": {
          target: API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/Api/, ""),
        },
      },
    },
    preview: {
      port: PORT,
      strictPort: true,
    },
    define: {
      "process.env.VITE_API_BASE_URL": JSON.stringify(API_BASE_URL),
    },
  };
});
