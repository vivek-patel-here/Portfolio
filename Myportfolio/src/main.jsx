import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import assets from "./assets/assets.js";
import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <video className="background-video" muted loop autoPlay>
      <source src={assets.bgv} type="video/mp4" />
    </video>
    <App />
  </StrictMode>
);
