import { createFileRoute } from "@tanstack/react-router";

import { Privacy } from "../sections/Privacy";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});
