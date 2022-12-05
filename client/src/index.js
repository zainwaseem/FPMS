import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthcontextProvider } from "./context/Authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthcontextProvider>
      <App />
    </AuthcontextProvider>
  </BrowserRouter>
);
