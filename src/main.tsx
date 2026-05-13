import { createRoot } from "react-dom/client";
import "@fontsource/metropolis/400.css";
import "@fontsource/metropolis/500.css";
import "@fontsource/metropolis/700.css";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LocaleProvider } from "./i18n/LocaleProvider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </ThemeProvider>,
);
