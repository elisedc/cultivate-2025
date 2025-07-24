import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("program", "program/program.tsx")] satisfies RouteConfig;
