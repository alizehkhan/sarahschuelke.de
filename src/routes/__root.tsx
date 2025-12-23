import { createRootRoute, Outlet } from "@tanstack/react-router";
import * as React from "react";

import { Contact } from "../sections/Contact";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <Contact />
    </React.Fragment>
  );
}
