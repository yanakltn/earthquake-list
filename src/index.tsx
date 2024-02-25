import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// context
import { EarthquakeProvider } from "./context/EarthquakeContext";
// mui
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <EarthquakeProvider>
      <App />
    </EarthquakeProvider>
  </React.StrictMode>
);

reportWebVitals();
