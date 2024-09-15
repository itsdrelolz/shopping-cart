import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")); // Get root element in the DOM
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
