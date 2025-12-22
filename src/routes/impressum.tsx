import { createFileRoute } from "@tanstack/react-router";
import { Impressum } from "../Impressum";

export const Route = createFileRoute("/impressum")({
  component: Impressum,
});
