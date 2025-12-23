import { createFileRoute } from "@tanstack/react-router";

import { Impressum } from "../sections/Impressum";

export const Route = createFileRoute("/impressum")({
  component: Impressum,
});
