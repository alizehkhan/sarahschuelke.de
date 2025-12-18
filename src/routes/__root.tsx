import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Footer } from "../Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
