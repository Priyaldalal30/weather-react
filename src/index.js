import React from "react";

import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StrictMode>
      <App />
    </StrictMode>
  </React.StrictMode>
);
