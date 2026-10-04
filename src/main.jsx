import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import App from "./App.jsx";

// Follow the visitor's light/dark preference (Bootstrap 5.3 theming)
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const setTheme = () => document.documentElement.setAttribute("data-bs-theme", mq.matches ? "dark" : "light");
setTheme();
mq.addEventListener("change", setTheme);

createRoot(document.getElementById("root")).render(<App />);
