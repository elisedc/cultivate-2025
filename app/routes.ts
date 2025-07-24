import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("program", "program/program.tsx"),
    route("information", "information/information.tsx"),
] satisfies RouteConfig;
