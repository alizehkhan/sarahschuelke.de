import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
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
