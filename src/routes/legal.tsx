import { createFileRoute } from "@tanstack/react-router";

import { Legal } from "../sections/Legal";

export const Route = createFileRoute("/legal")({
  component: Legal,
});
