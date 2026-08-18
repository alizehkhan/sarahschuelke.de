import { createFileRoute } from "@tanstack/react-router";

import { Retreat } from "../sections/Retreat";

export const Route = createFileRoute("/retreat")({
  component: Retreat,
});
