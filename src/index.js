import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
