import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { store } from "./store/Store.jsx";
import { Provider } from "react-redux";
import axios from "axios";

import { AuthcontextProvider } from "./context/Authcontext";

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthcontextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthcontextProvider>
);
