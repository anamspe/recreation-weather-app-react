import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Footer from "./Footer";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <div className="row">
        <div className="card mt-3 p-3">
          <App />
        </div>
        <Footer />
      </div>
    </div>
  </StrictMode>
);
