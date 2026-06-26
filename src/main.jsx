import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import LpsPage from "./pages/LpsPage";

const path = window.location.pathname.replace(/\/$/, "") || "/";
const Page = path === "/lps" ? LpsPage : App;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
