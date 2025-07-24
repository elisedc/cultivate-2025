import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // Github Pages does not support SSR
  basename: '/cultivate-2025', // Set the base path for the application
} satisfies Config;
