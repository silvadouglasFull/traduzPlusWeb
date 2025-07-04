import { gtag } from '@flavor/constants/gtag/index.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TagManager from 'react-gtm-module';
import { App } from "./App.tsx";

const tagManagerArgs = {
  gtmId: gtag,
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
