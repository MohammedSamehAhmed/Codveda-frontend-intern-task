import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import myRoutes from "./Router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRoutes} />
  </StrictMode>,
);
