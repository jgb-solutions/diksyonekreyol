import type { Route } from "./+types/home"
import { Welcome } from "../welcome/welcome"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Diksyonè Kreyòl Ayisyen" },
    { name: "description", content: "Diksyonè Kreyòl Ayisyen" },
  ]
}

export default function Home() {
  return <Welcome />
}
