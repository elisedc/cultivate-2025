import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cultivate 2025" },
    { name: "description", content: "Welcome to Cultivate 2025!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
