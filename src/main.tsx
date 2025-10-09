import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerServiceWorker, setupPWAInstallPrompt } from "./utils/pwaUtils";

if (import.meta.env.PROD) {
  registerServiceWorker().catch(console.error);
}

setupPWAInstallPrompt();

createRoot(document.getElementById("root")!).render(<App />);
